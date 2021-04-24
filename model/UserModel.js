
const userModel =
{

        fakeDB : [
            {
                id:7,
                firstName:"Jon",
                lastName:"Snow",
                email : "jon@snow.com",
            },
            {
                id:8,
                firstName:"Bruce",
                lastName:"Wayne",
                email : "bruce@wayne.com",
            },
            {
                id:9,
                firstName:"Thanos",
                lastName:"Badman",
                email : "thano@endgame.com",
            }, 
            {
                id:10,
                firstName:"Prue",
                lastName:"Pope",
                email : "prue@charmed.com",
            },
            {
                id:11,
                firstName:"Dianna",
                lastName:"Prince",
                email : "wonder@woman.com",
            },
            {
                id:12,
                firstName:"Prue",
                lastName:"Pope",
                email : "prue@charmed.com",
            },
            {
                id:13,
                firstName:"Dianna",
                lastName:"Prince",
                email : "wonder@woman.com",
            }
            
        ]

        ,

        getAllUsers()
        {
            return this.fakeDB;
        },


        getAUser(id)
        {
            return this.fakeDB.find(user=>user.id === id)
        },

        createAUser(product)
        {

                this.fakeDB.push(product);
        }

}


module.exports = userModel;

