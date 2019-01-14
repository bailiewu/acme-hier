# Weekend Project One

Given the following data:
```javascript
const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];
```
- the showManagementStructure outputs the management structure in hierarchical fashion.
- write the showManagementStructure function
- create a github repo for your code named acme-hier

```javascript
showManagementStructure(users);
/*
moe
 - larry
	 - curly
 - shep
	 - groucho
*/
```