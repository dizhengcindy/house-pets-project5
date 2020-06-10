# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Service.destroy_all
Company.destroy_all
Schedule.destroy_all
Companyservice.destroy_all
# User.destroy_all

# services
s1 = Service.create(service_type:"Walk dog")
s2 = Service.create(service_type:"Dog day care")
s3 = Service.create(service_type:"Dog Boarding")
s4 = Service.create(service_type:"Dog In home care")

s5 = Service.create(service_type:"Cat Boarding")
s6 = Service.create(service_type:"Cat In home care")

#company
# dog
c1 = Company.create(company_name:"DUMBO",adddress_line:"824 NW 46th St",city:"Seattle", state:"WA",country: "US",zip: 98107,
picture1:"http://dumbonyc.com/wp-content/uploads/images/blog/DPC_storefront.jpg",
picture2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_in_the_grass_yard%40Affectionate_Pet_Care.JPG/1280px-Running_in_the_grass_yard%40Affectionate_Pet_Care.JPG",
picture3: "https://ferndogtraining.com/wp-content/uploads/2017/03/Daycare-post-feature-image-1-1080x628.jpg" )
# dog&cat
c2 = Company.create(company_name:"Sydney's Pet Resort",adddress_line:"11762 Clear Creek Road NW",city:"Silverdale", state:"WA",country: "US",zip: 98383,
picture1:"https://www.sydneyspetresortandspa.com/wp-content/uploads/2018/03/home-about-facade2.jpg",
picture2:"https://communityimpact.com/wp-content/uploads/2018/06/CTA-2018-06-37-1.jpg",
picture3: "https://www.cleveland.thebarkleypethotel.com/wp-content/uploads/2014/10/8.jpg" )
#cat 
c3 = Company.create(company_name:"Whiskers",adddress_line:"2040 S 142nd St",city:"SeaTac", state:"WA",country: "US",zip: 98168,
picture1:"https://hellogeorgetown.com/wp-content/uploads/2016/06/whiskers-store-front.jpg",
picture2:"https://www.petresort.com/wp-content/uploads/2015/11/Cat-Boarding-Hero.jpg",
picture3: "https://www.petresort.com/wp-content/uploads/2015/11/Cat-Boarding-Seattle.jpg" )
#cat&dog
c4 = Company.create(company_name:"PetsHotel",adddress_line:"34295 Oakville Rd N",city:"Albany", state:"OR",country: "US",zip: 97321,
picture1:"https://www.catster.com/wp-content/uploads/2015/06/0550c240470ef642143743c179db20f6.jpg",
picture2:"https://www.thebalancecareers.com/thmb/_LI3VX2PqLZTgFkEEsIFaLON6Gs=/1887x1415/smart/filters:no_upscale()/GettyImages-522796741-56e1ecb53df78c5ba056af43.jpg",
picture3: "https://www.mountainrunkennel.com/images/cattery-_01.jpg" )
#dog walk and dog cat in home care only
c5 = Company.create(company_name:"Stay and play",adddress_line:"3606 NE Columbia Blvd",city:"Portland", state:"OR",country: "US",zip: 97211,
picture1:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/100037543-where-to-feed-dog-632x475-300x225.jpg",
picture2:"https://www.cesarsway.com/wp-content/uploads/2015/06/6-tips-for-mastering-the-dog-walk.jpg",
picture3: "http://sit-stay-play.com/wp-content/uploads/2019/02/tysonjimmy.jpg" )

#company_services
cs1 = Companyservice.create(company:c1, service:s1,charge:20)
cs2 = Companyservice.create(company:c1, service:s2,charge:40)
cs3 = Companyservice.create(company:c1, service:s3,charge:50)
cs4 = Companyservice.create(company:c1, service:s4,charge:30)

cs5 = Companyservice.create(company:c2, service:s1,charge:22)
cs6 = Companyservice.create(company:c2, service:s2,charge:43)
cs7 = Companyservice.create(company:c2, service:s3,charge:55)
cs8 = Companyservice.create(company:c2, service:s4,charge:30)
cs9 = Companyservice.create(company:c2, service:s5,charge:50)
cs10 = Companyservice.create(company:c2, service:s6,charge:20)

cs11 = Companyservice.create(company:c3, service:s5,charge:40)
cs12 = Companyservice.create(company:c3, service:s6,charge:30)

cs13 = Companyservice.create(company:c4, service:s1,charge:18)
cs14= Companyservice.create(company:c4, service:s2,charge:38)
cs15= Companyservice.create(company:c4, service:s3,charge:48)
cs16= Companyservice.create(company:c4, service:s4,charge:28)
cs17= Companyservice.create(company:c4, service:s5,charge:48)
cs18 = Companyservice.create(company:c4, service:s6,charge:18)

cs19= Companyservice.create(company:c5, service:s1,charge:16)
cs20= Companyservice.create(company:c5, service:s4,charge:25)
cs21 = Companyservice.create(company:c5, service:s6,charge:16)
