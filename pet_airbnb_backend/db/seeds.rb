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
User.destroy_all

# services
s1 = Service.create(service_type:"Walk dog")
s2 = Service.create(service_type:"Dog day care")
s3 = Service.create(service_type:"Dog Boarding")
s4 = Service.create(service_type:"Dog In home care")

s5 = Service.create(service_type:"Cat Boarding")
s6 = Service.create(service_type:"Cat In home care")

#company
# dog
 c01 = Company.create(company_name:"DUMBO",address_line:"824 NW 46th St",city:"Seattle", state:"WA",country: "US",zip: 98107,
picture1:"http://dumbonyc.com/wp-content/uploads/images/blog/DPC_storefront.jpg",
picture2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_in_the_grass_yard%40Affectionate_Pet_Care.JPG/1280px-Running_in_the_grass_yard%40Affectionate_Pet_Care.JPG",
picture3: "https://ferndogtraining.com/wp-content/uploads/2017/03/Daycare-post-feature-image-1-1080x628.jpg",
 description:"We are a Seattle family owned and operated dog day care center. We pride ourselves on delivering peace of mind in a safe environment by caring for every dog as our own.  We ensure safety by providing 24/7 human monitoring, making sure all dogs are vaccinated, and by having each of our pooches undergo an evaluation with one of our staff members to make sure that the environment is right for them.")
# dog&cat
 c02 = Company.create(company_name:"Sydney's Pet Resort",address_line:"2751 4th Ave",city:"Seattle", state:"WA",country: "US",zip: 98134,
picture1:"https://www.sydneyspetresortandspa.com/wp-content/uploads/2018/03/home-about-facade2.jpg",
picture2:"https://communityimpact.com/wp-content/uploads/2018/06/CTA-2018-06-37-1.jpg",
picture3: "https://www.cleveland.thebarkleypethotel.com/wp-content/uploads/2014/10/8.jpg" ,
description:"Each of our employees is hired based on their love of dogs and cats! We can guarantee that your pet will be getting the absolute best treatment.")
#cat 
 c03 = Company.create(company_name:"Whiskers",address_line:"2040 S 142nd St",city:"SeaTac", state:"WA",country: "US",zip: 98168,
picture1:"https://hellogeorgetown.com/wp-content/uploads/2016/06/whiskers-store-front.jpg",
picture2:"https://www.petresort.com/wp-content/uploads/2015/11/Cat-Boarding-Hero.jpg",
picture3: "https://www.petresort.com/wp-content/uploads/2015/11/Cat-Boarding-Seattle.jpg" ,
description:"We are one of the highest quality pet resorts, our facility is state of the art and maintained to the best “Ultra Clean” standards. Our pet resort is one of the most unique pet boarding facilities in the greater Seattle area.")
# Dog
c04 = Company.create(company_name:"Lazy Dog",address_line:"4733 Ballard Ave NW",city:"Seattle", state:"WA",country: "US",zip: 98107,
picture1:"https://molotilo.com/wp-content/uploads/2016/07/dog-care.jpg",
picture2:"https://www.peta.org/wp-content/uploads/2013/10/dogs-saved1.jpg?20151027073607",
picture3: "https://storage.googleapis.com/petbacker/images/blog/2018/pet-care-dog-sitting-services.jpg" ,
description:"We promise to love, cherish and protect your family as if they are one of our own. All Dogs deserve great care because their perfection is a derivative of their vulnerability, trustworthiness and advanced companionship and therapeutic qualities.")
# Dog
c05= Company.create(company_name:"West Seattle Dog House Daycare",address_line:"38th Ave SW",city:"Seattle", state:"WA",country: "US",zip: 98126,
picture1:"https://www.doggiedendallas.com/wp-content/uploads/2018/12/image-dog4-min.jpg",
picture2:"http://wsdoghousedaycare.com/wp-content/uploads/2018/03/dog1.jpg",
picture3: "http://wsdoghousedaycare.com/wp-content/uploads/2018/04/IMG-1471-1-1024x768.jpg" ,
description:"The daycare house is owned and operated by a certified veterinary technician so that you can feel at ease leaving your dog in capable hands in the unlikely case of an emergency.")
# Dog&cat
c06 = Company.create(company_name:"Fantastic Dog & Cat Sitting service",address_line:"4714 Ballard Ave NW",city:"Seattle", state:"WA",country: "US",zip: 98107,
picture2:"https://www.fantasticdogandcatsitting.com/images/dan75.jpg",
picture3:"https://www.aspca.org/sites/default/files/cat-care_general-cat-care_body2-right.jpg",
picture1: "https://www.smalldoorvet.com/wp-content/uploads/2020/03/Can-cats-and-dogs-get-coronavirus_resized.jpg" ,
description:"We can administer medication to pets with special needs for a nominal fee (please see Special Needs category of website). We would be happy to provide texts, pictures and emails on how the animal(s) are doing. We go the extra mile to make sure")



#OR
#cat&dog
 c11 = Company.create(company_name:"PetsHotel",address_line:"6025 NE Sandy Blvd",city:"Portland", state:"OR",country: "US",zip: 97213,
picture1:"https://www.catster.com/wp-content/uploads/2015/06/0550c240470ef642143743c179db20f6.jpg",
picture2:"https://www.thebalancecareers.com/thmb/_LI3VX2PqLZTgFkEEsIFaLON6Gs=/1887x1415/smart/filters:no_upscale()/GettyImages-522796741-56e1ecb53df78c5ba056af43.jpg",
picture3: "https://www.mountainrunkennel.com/images/cattery-_01.jpg" ,
description:"PetsHotel's trained staff ensures around the clock comfort and care for all of our pet guests, while providing owners with incomparable peace of mind.")
#dog walk and dog cat in home care only
  c12 = Company.create(company_name:"KENNEL GROUNDS",address_line:"3606 NE Columbia Blvd",city:"Portland", state:"OR",country: "US",zip: 97211,
picture1:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/100037543-where-to-feed-dog-632x475-300x225.jpg",
picture2:"https://www.cesarsway.com/wp-content/uploads/2015/06/6-tips-for-mastering-the-dog-walk.jpg",
picture3: "http://sit-stay-play.com/wp-content/uploads/2019/02/tysonjimmy.jpg",
description:"Any time your children are apart from you they’ll experience a certain level of stress. When your dog or cat is at a pet boarding kennel they’re no different. The more pleasant the environment, the happier and less stressed your pet will be." )
#cat
c13 = Company.create(company_name:"Cats In The City",address_line:"415 NE 80th Ave",city:"Portland", state:"OR",country: "US",zip: 97213,
picture1:"https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/img/care/HP_PCC_lg_cat_training_hero.jpg",
picture2:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/86525557-general-cat-care-632x475.jpg",
picture3: "https://www.dailycat-app.com/medias/common/Comment-soccuper-chat_kraken.jpg",
description:"Cats in the City was started by animal lovers Shawn and Daniel Lioy-Ryan, a social worker and neuroscientist. Both specialized in animal behavior. Shawn trained with domestic cats for animal assisted therapy while working with folks facing end-of-life. Daniel studied animal behavior while earning his PhD from OHSU. Together they launched Cats in the City in Portland, Oregon nearly ten years ago with a focus on cat-only services like cat boarding, sitting, and grooming. Their idea was to give cats the comfort of a home setting, not a crate or kennel." )
#cat
c14 = Company.create(company_name:"Arnold Creek Cat Retreat",address_line:"2020 SW Arnold St",city:"Portland", state:"OR",country: "US",zip: 97219,
picture1:"https://pawspenthouse.com/wp-content/themes/pet/images/headers/cat-sitting.jpg",
picture2:"https://www.thebalancecareers.com/thmb/_LI3VX2PqLZTgFkEEsIFaLON6Gs=/1887x1415/smart/filters:no_upscale()/GettyImages-522796741-56e1ecb53df78c5ba056af43.jpg",
picture3: "https://www.mountainrunkennel.com/images/cattery-_01.jpg" ,
description:"Ourcat sitting specialists offer the best solution to cat owners who have concerns about travel with their feline companion. We are able to provide care for both healthy and sick or recovering cats while you are out of town.")

#dog
c15 = Company.create(company_name:"Hot Diggity!",address_line:"1631 NE Broadway St #715",city:"Portland", state:"OR",country: "US",zip: 97232,
picture1:"http://hotdiggitypetsitting.com/wp-content/uploads/2017/03/LandingPage_BoP-min.jpg",
picture2:"https://www.sportsvetamc.com/wp-content/uploads/2019/07/sports-vet-daycare.jpg",
picture3: "https://1fe5f3y9d317tjbp32nlqwer-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/dogs-running-in-daycare.jpg" ,
description:"Hot Diggity! prides ourselves on our competitive rates and professional, reliable dog walking and pet sitting services. We are Licensed, Bonded, Insured, and members of Pet Sitters International. Most important, though, is that we love our job and thrive in it.")


#company_services
cs1 = Companyservice.create(company: c01, service:s1,charge:"23 per 30 mins")
cs2 = Companyservice.create(company: c01, service:s2,charge:40 )
cs3 = Companyservice.create(company: c01, service:s3,charge:50 )
cs4 = Companyservice.create(company: c01, service:s4,charge:30 )

cs5 = Companyservice.create(company: c02, service:s1,charge:"23 per 30 mins")
cs6 = Companyservice.create(company: c02, service:s2,charge:43 )
cs7 = Companyservice.create(company: c02, service:s3,charge:55 )
cs8 = Companyservice.create(company: c02, service:s4,charge:30 )
cs9 = Companyservice.create(company: c02, service:s5,charge:50 )
cs10 = Companyservice.create(company: c02, service:s6,charge:20 )

cs11 = Companyservice.create(company: c03, service:s5,charge:40)
cs12 = Companyservice.create(company: c03, service:s6,charge:30)

cs13 = Companyservice.create(company: c04, service:s1,charge:"20 per 30 mins")
cs14 = Companyservice.create(company: c04, service:s2,charge:38 )
cs15 = Companyservice.create(company: c04, service:s3,charge:48 )
cs16 = Companyservice.create(company: c04, service:s4,charge:28 )

cs17 = Companyservice.create(company: c05, service:s1,charge:"25 per 30 mins")
cs18 = Companyservice.create(company: c05, service:s2,charge:49 )
cs19 = Companyservice.create(company: c05, service:s3,charge:29 )
cs20 = Companyservice.create(company: c05, service:s4,charge:29 )

cs21 = Companyservice.create(company: c06, service:s1,charge:"22 per 30 mins")
cs22 = Companyservice.create(company: c06, service:s2,charge:42 )
cs23 = Companyservice.create(company: c06, service:s3,charge:52 )
cs24 = Companyservice.create(company: c06, service:s4,charge:32 )
cs25 = Companyservice.create(company: c06, service:s5,charge:52 )
cs26 = Companyservice.create(company: c06, service:s6,charge:22 )

cs27 = Companyservice.create(company: c11, service:s1,charge:"20 per 30 mins")
cs28= Companyservice.create(company: c11, service:s2,charge:38 )
cs29= Companyservice.create(company: c11, service:s3,charge:48 )
cs30= Companyservice.create(company: c11, service:s4,charge:28 )
cs31= Companyservice.create(company: c11, service:s5,charge:48 )
cs32 = Companyservice.create(company: c11, service:s6,charge:18 )

cs33= Companyservice.create(company:  c12, service:s1,charge:"21 per 30 mins")
cs34= Companyservice.create(company:  c12, service:s4,charge:25 )
cs35 = Companyservice.create(company:  c12, service:s6,charge:16 )


cs36 = Companyservice.create(company: c13, service:s5,charge:40)
cs37 = Companyservice.create(company: c13, service:s6,charge:30)

cs38 = Companyservice.create(company: c14, service:s5,charge:38)
cs39 = Companyservice.create(company: c14, service:s6,charge:28)

cs40 = Companyservice.create(company: c15, service:s1,charge:"21 per 30 mins")
cs41 = Companyservice.create(company: c15, service:s2,charge:35 )
cs42= Companyservice.create(company: c15, service:s3,charge:45 )
cs43= Companyservice.create(company: c15, service:s4,charge:28 )

#user

u1 = User.create(username:"Amy", email:"amy123@gmail.com", password:"123")
u2 = User.create(username:"Nancy", email:"nancy123@gmail.com", password:"123")
u3 = User.create(username:"Jess", email:"jess123@gmail.com", password:"123")
u4 = User.create(username:"Daniel", email:"dan123@gmail.com", password:"123")

