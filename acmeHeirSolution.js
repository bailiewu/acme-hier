console.clear()
const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

function showUser(user, users, level){
    console.log(user.name, level)
    const reports = users.filter( u => u.managerId === user.id)
    // console.log(reports)
    reports.forEach(report => showUser(report, users))
}

function showManagementStructure(users){
    const boss = users.find( (user) => !user.managerId)
    showUser(boss, users)
}

showManagementStructure(users)

//check online for better solution
