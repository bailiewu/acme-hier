function showManagementStructure(users){
    let result = ''
    let boss = findBoss(users);
    console.log(boss.name)
    result += boss.name
    findSubordinates(boss, users)
    function findSubordinates(bossI, user, tiersBelow = 0){
        tiersBelow++;
        users.forEach(element => {
            if (element.managerId === bossI.id){
                let temp = ''
                for (let i = 1; i < tiersBelow; i++) temp += `\t`
                temp += ` - ${element.name}`
                console.log(temp)
                result += `\n${temp}`
                let isManager = false
                for (const key in user) {
                    if (users.hasOwnProperty(key)) {
                        if (users.id === key.managerId)isManager = true
                    }
                }
                if (isManager) findSubordinates(element, users, tiersBelow)
            }
        });
    }
    return result
    function findBoss(ary) {
        let temp
        ary.forEach(element => {
            if (!element.managerId) temp = element
        });
        return temp
    }
}

const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
    { id: 5, name: 'shepkid', managerId: 4},
];

console.log('showManagementStructure(users):')
showManagementStructure(users)
