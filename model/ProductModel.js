
const productModel =
{

        fakeDB : [
            {
                id:1,
                title:"Tierra 3-Piece Classic Outdoor Wicker Coffee Lounger Set in Black with Cushion",
                description:"Weather Resistant / Water Repellent Cushion",
                img : "https://i5.walmartimages.ca/images/Enlarge/290/951/6000201290951.jpg",
                price:282.97,
                category : "tables"
            },
            {
                id:2,
                title:"COSCO Outdoor 4 Piece Malmo Resin Wicker Patio Deep Seating Conversation Set, No Tools Assembly, Red Cushions, Brown Resin Wicker",
                description:"Outdoor Conversation",
                img : "https://i5.walmartimages.ca/images/Thumbnails/195/289/6000201195289.jpg",
                price :829.99,
                category : "chairs"  
                },
            {
                id:3,
                title:"Outsunny 4Pcs Rattan Sofa Set",
                description:"4pc sofa set",
                img : "https://i5.walmartimages.ca/images/Enlarge/499/717/6000198499717.jpg",
                price:539.99,
                category : "chairs",  
            }, 
            {
                id:4,
                title:"Tierra 3-Piece Classic Outdoor Wicker Coffee Lounger Set in Black with Cushion",
                description:"Weather Resistant / Water Repellent Cushion",
                img : "https://i5.walmartimages.ca/images/Thumbnails/195/289/6000201195289.jpg",
                price:100,
                category : "tables"  
            },
            {
                id:5,
                title:"Severn Grey powder coated tubular aluminum 3 piece Conversation Set",
                description:"2 club chairs with cushions and 1 table.",
                img : "https://i5.walmartimages.ca/images/Enlarge/870/759/6000199870759.jpg",
                price:749,
                category : "chairs"  
            },
            {
                id:6,
                title:"Higold - Nofi Patio Furniture, 4 Pieces Conversation Set with Loveseat Sofa, Grade A Teak, Matte Charcoal Aluminum Finish, Brown Cushions, Blue Pillows Included",
                description:"This item is sold online only ",
                img : "https://i5.walmartimages.ca/images/Thumbnails/195/289/6000201195289.jpg",
                price:2049,
                category : "tables"  
            }
            
        ]

        ,

        getAllProducts()
        {
            return this.fakeDB;
        },


        getAProduct(id)
        {
            return this.fakeDB.find(product=>product.id === id)
        },

        createAProduct(product)
        {

                this.fakeDB.push(product);
        }

}


module.exports = productModel;

