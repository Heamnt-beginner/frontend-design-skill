const fs = require('fs');
const dir = 'C:/Users/HP/.config/opencode/skills/signature';
const skill = fs.readFileSync(dir + '/SKILL.md', 'utf8');
const m = skill.match(/^---\n([\s\S]*?)\n---\n/);
if (!m) throw new Error('no frontmatter');
const fm = m[1];
const name = (fm.match(/^name: (.+)$/m) || [])[1];
const desc = (fm.match(/^description: (.+)$/m) || [])[1];
const problems = [];
if (name !== 'signature') problems.push('name !== signature: ' + name);
if (!dir.toLowerCase().endsWith('/' + name)) problems.push('dir mismatch');
if (desc.length > 1024) problems.push('description too long: ' + desc.length);
if (desc.length < 20) problems.push('description too short');
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) problems.push('name regex fail');
// referenced files exist
const refs = [...skill.matchAll(/\]\((references\/[^)]+)\)/g)].map(x => x[1]);
for (const r of new Set(refs)) if (!fs.existsSync(dir + '/' + r)) problems.push('missing ref: ' + r);
// gate numbering: find "## Gates" section lines, count numbered items
const gates = skill.split('## Gates')[1];
if (!gates) problems.push('no Gates section');
const nums = [...gates.matchAll(/^(\d+)\./gm)].map(x => +x[1]);
if (nums.length && [...nums].sort((a,b)=>a-b).join(',') !== Array.from({length: nums.length}, (_,i) => i + 1).join(',')) problems.push('gate numbering broken: ' + nums.join(','));
// identity rows: 20 numbered rows?
const idents = fs.readFileSync(dir + '/references/identities.md', 'utf8').replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');
const rows = [...idents.matchAll(/^\| (\d+) \|/gm)].map(x => +x[1]);
if ([...rows].sort((a,b)=>a-b).join(',') !== Array.from({length: 20}, (_,i) => i + 1).join(',')) problems.push('identity rows not exactly 1..20: ' + rows.join(','));
// structures: ten "### NN ·" blocks
const structs = fs.readFileSync(dir + '/references/structures.md', 'utf8');
const shapes = [...structs.matchAll(/^### (\d\d) · /gm)].map(x => +x[1]);
if ([...shapes].join(',') !== '1,2,3,4,5,6,7,8,9,10') problems.push('shapes not 1..10: ' + shapes.join(','));
// sizes
for (const f of ['SKILL.md','references/structures.md','references/identities.md'])
  console.log(f, Math.round(fs.statSync(dir + '/' + f).size / 102.4) / 10 + 'kB');
console.log('gates:', nums.length, '| identities:', rows.length, '| shapes:', shapes.length);
console.log(problems.length ? 'FAIL: ' + problems.join(' | ') : 'ALL CHECKS PASS');
process.exit(problems.length ? 1 : 0);
