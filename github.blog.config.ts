import GithubBlogConfig from "@/utills/config/github-blog.config";
const alieCategories:[{category_name: string}] =  [
    {
        "category_name": "Food",
        "category_id": 2
    },
    {
        "parent_category_id": 2,
        "category_name": "Meat",
        "category_id": 201379402
    },
    {
        "parent_category_id": 2,
        "category_name": "Fruits and Berries",
        "category_id": 201379801
    },
    {
        "parent_category_id": 2,
        "category_name": "Bread and Pastries",
        "category_id": 201378002
    },
    {
        "parent_category_id": 2,
        "category_name": "Canned Food",
        "category_id": 201248407
    },
    {
        "parent_category_id": 2,
        "category_name": "Sausages",
        "category_id": 201378103
    },
    {
        "parent_category_id": 2,
        "category_name": "Canned Food1",
        "category_id": 200183144
    },
    {
        "parent_category_id": 2,
        "category_name": "Alcoholic Beverages",
        "category_id": 201345805
    },
    {
        "parent_category_id": 2,
        "category_name": "Fish and Sea Food",
        "category_id": 201376903
    },
    {
        "parent_category_id": 2,
        "category_name": "Grocery",
        "category_id": 200180142
    },
    {
        "parent_category_id": 2,
        "category_name": "Nut & Kernel1",
        "category_id": 200001321
    },
    {
        "parent_category_id": 2,
        "category_name": "Dried Fruit1",
        "category_id": 200001317
    },
    {
        "parent_category_id": 2,
        "category_name": "Grain Products1",
        "category_id": 200001287
    },
    {
        "parent_category_id": 2,
        "category_name": "Coffee1",
        "category_id": 200001238
    },
    {
        "parent_category_id": 2,
        "category_name": "Milk and Eggs",
        "category_id": 201376204
    },
    {
        "parent_category_id": 2,
        "category_name": "Ready Meal",
        "category_id": 201376702
    },
    {
        "parent_category_id": 2,
        "category_name": "Water/ Juices/ Drinks",
        "category_id": 201249506
    },
    {
        "parent_category_id": 2,
        "category_name": "Dried Goods / Local Specialties",
        "category_id": 201248805
    },
    {
        "parent_category_id": 2,
        "category_name": "Coffee",
        "category_id": 201248804
    },
    {
        "parent_category_id": 2,
        "category_name": "Dried Goods / Local Specialties1",
        "category_id": 200003573
    },
    {
        "parent_category_id": 2,
        "category_name": "Cheese",
        "category_id": 201379901
    },
    {
        "parent_category_id": 2,
        "category_name": "Dried Fruit",
        "category_id": 201254404
    },
    {
        "parent_category_id": 2,
        "category_name": "Grain Products",
        "category_id": 201254306
    },
    {
        "parent_category_id": 2,
        "category_name": "Nut & Kernel",
        "category_id": 201253905
    },
    {
        "parent_category_id": 2,
        "category_name": "Frozen Products",
        "category_id": 201374104
    },
    {
        "parent_category_id": 2,
        "category_name": "Food&Fresh（Spe）",
        "category_id": 202030002
    },
    {
        "parent_category_id": 2,
        "category_name": "Tea",
        "category_id": 100007269
    },
    {
        "parent_category_id": 2,
        "category_name": "Vegetables and Greens",
        "category_id": 201373004
    },
    {
        "category_name": "Apparel & Accessories",
        "category_id": 3
    },
    {
        "parent_category_id": 3,
        "category_name": "Sportswears",
        "category_id": 200003274
    },
    {
        "category_name": "Home Appliances",
        "category_id": 6
    },
    {
        "parent_category_id": 6,
        "category_name": "Other Home Appliances",
        "category_id": 628
    },
    {
        "parent_category_id": 6,
        "category_name": "Personal Care Appliances",
        "category_id": 200165142
    },
    {
        "parent_category_id": 6,
        "category_name": "Commercial Appliances",
        "category_id": 200235142
    },
    {
        "parent_category_id": 6,
        "category_name": "Cleaning Appliances",
        "category_id": 100000038
    },
    {
        "parent_category_id": 6,
        "category_name": "Home Appliance Parts",
        "category_id": 100000039
    },
    {
        "parent_category_id": 6,
        "category_name": "Kitchen Appliances",
        "category_id": 100000041
    },
    {
        "parent_category_id": 6,
        "category_name": "Major Appliances",
        "category_id": 200293142
    },
    {
        "parent_category_id": 6,
        "category_name": "Household Appliances",
        "category_id": 200294142
    },
    {
        "category_name": "Computer & Office",
        "category_id": 7
    },
    {
        "parent_category_id": 7,
        "category_name": "Desktops & AIO",
        "category_id": 701
    },
    {
        "parent_category_id": 7,
        "category_name": "Laptops",
        "category_id": 702
    },
    {
        "parent_category_id": 7,
        "category_name": "Laptop Parts & Accessories",
        "category_id": 200001083
    },
    {
        "parent_category_id": 7,
        "category_name": "Computer Peripherals",
        "category_id": 200001081
    },
    {
        "parent_category_id": 7,
        "category_name": "Tablets",
        "category_id": 200001086
    },
    {
        "parent_category_id": 7,
        "category_name": "Tablet Accessories & Parts",
        "category_id": 200001085
    },
    {
        "parent_category_id": 7,
        "category_name": "Computer Components",
        "category_id": 200001076
    },
    {
        "parent_category_id": 7,
        "category_name": "Storage Device",
        "category_id": 200001074
    },
    {
        "parent_category_id": 7,
        "category_name": "Networking",
        "category_id": 200001077
    },
    {
        "parent_category_id": 7,
        "category_name": "Computer Cleaners",
        "category_id": 708022
    },
    {
        "parent_category_id": 7,
        "category_name": "Office Software",
        "category_id": 200318143
    },
    {
        "parent_category_id": 7,
        "category_name": "Internal Storage",
        "category_id": 200154144
    },
    {
        "parent_category_id": 7,
        "category_name": "Barebone & Mini PC",
        "category_id": 70803003
    },
    {
        "parent_category_id": 7,
        "category_name": "3D Printing & Additive Manufacturing",
        "category_id": 200003879
    },
    {
        "parent_category_id": 7,
        "category_name": "Office Electronics",
        "category_id": 200003782
    },
    {
        "parent_category_id": 7,
        "category_name": "Servers & Industrial Computer",
        "category_id": 201610101
    },
    {
        "parent_category_id": 7,
        "category_name": "DIY Gaming Computer",
        "category_id": 200048142
    },
    {
        "category_name": "Home Improvement",
        "category_id": 13
    },
    {
        "parent_category_id": 13,
        "category_name": "Electrical Equipment & Supplies",
        "category_id": 5
    },
    {
        "parent_category_id": 13,
        "category_name": "Hardware",
        "category_id": 42
    },
    {
        "parent_category_id": 13,
        "category_name": "Stone Carvings and Sculptures",
        "category_id": 131207
    },
    {
        "parent_category_id": 13,
        "category_name": "Landscaping Stone",
        "category_id": 131211
    },
    {
        "parent_category_id": 13,
        "category_name": "Countertops,Vanity Tops & Table Tops",
        "category_id": 131210
    },
    {
        "parent_category_id": 13,
        "category_name": "Painting Supplies & Wall Treatments",
        "category_id": 200264142
    },
    {
        "parent_category_id": 13,
        "category_name": "Functional Material",
        "category_id": 200001751
    },
    {
        "parent_category_id": 13,
        "category_name": "Quarry Stone & Slabs",
        "category_id": 1312
    },
    {
        "parent_category_id": 13,
        "category_name": "Building Glass",
        "category_id": 1315
    },
    {
        "parent_category_id": 13,
        "category_name": "Ladders & Scaffoldings",
        "category_id": 1330
    },
    {
        "parent_category_id": 13,
        "category_name": "Other Home Improvement",
        "category_id": 1333
    },
    {
        "parent_category_id": 13,
        "category_name": "Metal Building Materials",
        "category_id": 200001382
    },
    {
        "parent_category_id": 13,
        "category_name": "Bathroom Fixture",
        "category_id": 200066142
    },
    {
        "parent_category_id": 13,
        "category_name": "Kitchen Fixture",
        "category_id": 200066144
    },
    {
        "parent_category_id": 13,
        "category_name": "bbbb",
        "category_id": 200072142
    },
    {
        "parent_category_id": 13,
        "category_name": "Heating, Cooling & Vents",
        "category_id": 200366148
    },
    {
        "parent_category_id": 13,
        "category_name": "aaaa",
        "category_id": 200071142
    },
    {
        "parent_category_id": 13,
        "category_name": "Plumbing",
        "category_id": 200282142
    },
    {
        "parent_category_id": 13,
        "category_name": "Family Intelligence System",
        "category_id": 200321150
    },
    {
        "parent_category_id": 13,
        "category_name": "Installation Service",
        "category_id": 201303704
    },
    {
        "parent_category_id": 13,
        "category_name": "Timber",
        "category_id": 100005335
    },
    {
        "parent_category_id": 13,
        "category_name": "Boards",
        "category_id": 100005320
    },
    {
        "parent_category_id": 13,
        "category_name": "Plastic Building Materials",
        "category_id": 100005310
    },
    {
        "parent_category_id": 13,
        "category_name": "Earthwork Products",
        "category_id": 100005281
    },
    {
        "parent_category_id": 13,
        "category_name": "Curtain Walls & Accessories",
        "category_id": 100005265
    },
    {
        "parent_category_id": 13,
        "category_name": "Garden Landscaping & Decking",
        "category_id": 12504
    },
    {
        "parent_category_id": 13,
        "category_name": "Ceilings",
        "category_id": 100007099
    },
    {
        "parent_category_id": 13,
        "category_name": "Sunrooms & Glass Houses",
        "category_id": 100007082
    },
    {
        "parent_category_id": 13,
        "category_name": "Doors, Gates & Windows",
        "category_id": 100007064
    },
    {
        "parent_category_id": 13,
        "category_name": "Stairs & Stair Parts",
        "category_id": 100007071
    },
    {
        "parent_category_id": 13,
        "category_name": "Tiles & Accessories",
        "category_id": 100006285
    },
    {
        "parent_category_id": 13,
        "category_name": "Flooring & Accessories",
        "category_id": 100006266
    },
    {
        "category_name": "Home & Garden",
        "category_id": 15
    },
    {
        "parent_category_id": 15,
        "category_name": "Garden Supplies",
        "category_id": 125
    },
    {
        "parent_category_id": 15,
        "category_name": "Home Textile",
        "category_id": 405
    },
    {
        "parent_category_id": 15,
        "category_name": "Home Storage & Organization",
        "category_id": 1541
    },
    {
        "parent_category_id": 15,
        "category_name": "Household Merchandises",
        "category_id": 200033149
    },
    {
        "parent_category_id": 15,
        "category_name": "Kitchen,Dining & Bar",
        "category_id": 200000920
    },
    {
        "parent_category_id": 15,
        "category_name": "Home Decor",
        "category_id": 3710
    },
    {
        "parent_category_id": 15,
        "category_name": "Collectibles",
        "category_id": 200003998
    },
    {
        "parent_category_id": 15,
        "category_name": "Arts,Crafts & Sewing",
        "category_id": 200003937
    },
    {
        "parent_category_id": 15,
        "category_name": "Festive & Party Supplies",
        "category_id": 100001824
    },
    {
        "parent_category_id": 15,
        "category_name": "Pet Products",
        "category_id": 100006664
    },
    {
        "category_name": "Sports & Entertainment",
        "category_id": 18
    },
    {
        "parent_category_id": 18,
        "category_name": "Sports Competitions",
        "category_id": 200297143
    },
    {
        "parent_category_id": 18,
        "category_name": "Racquet Sports",
        "category_id": 200003540
    },
    {
        "parent_category_id": 18,
        "category_name": "Entertainment",
        "category_id": 200003538
    },
    {
        "parent_category_id": 18,
        "category_name": "Skiing & Snowboarding",
        "category_id": 200003543
    },
    {
        "parent_category_id": 18,
        "category_name": "Roller,Skateboard",
        "category_id": 200003541
    },
    {
        "parent_category_id": 18,
        "category_name": "Cycling",
        "category_id": 200003500
    },
    {
        "parent_category_id": 18,
        "category_name": "Team Sports",
        "category_id": 200378143
    },
    {
        "parent_category_id": 18,
        "category_name": "Other Sports & Entertainment Product",
        "category_id": 200004194
    },
    {
        "parent_category_id": 18,
        "category_name": "Sports Bags(hidden)",
        "category_id": 200004217
    },
    {
        "parent_category_id": 18,
        "category_name": "Water Sports",
        "category_id": 100005657
    },
    {
        "parent_category_id": 18,
        "category_name": "Shooting",
        "category_id": 100005571
    },
    {
        "parent_category_id": 18,
        "category_name": "Hunting",
        "category_id": 100005563
    },
    {
        "parent_category_id": 18,
        "category_name": "Fishing",
        "category_id": 100005537
    },
    {
        "parent_category_id": 18,
        "category_name": "Horse Riding",
        "category_id": 100005551
    },
    {
        "parent_category_id": 18,
        "category_name": "Camping & Hiking",
        "category_id": 100005529
    },
    {
        "parent_category_id": 18,
        "category_name": "Musical Instruments",
        "category_id": 100005481
    },
    {
        "parent_category_id": 18,
        "category_name": "Fitness & Body Building",
        "category_id": 100005371
    },
    {
        "parent_category_id": 18,
        "category_name": "Golf",
        "category_id": 100005360
    },
    {
        "parent_category_id": 18,
        "category_name": "Cheerleading",
        "category_id": 100005880
    },
    {
        "category_name": "Office & School Supplies",
        "category_id": 21
    },
    {
        "parent_category_id": 21,
        "category_name": "Pens, Pencils & Writing Supplies",
        "category_id": 200001743
    },
    {
        "parent_category_id": 21,
        "category_name": "Printing Products",
        "category_id": 200001562
    },
    {
        "parent_category_id": 21,
        "category_name": "Paper & Printable Media",
        "category_id": 2112
    },
    {
        "parent_category_id": 21,
        "category_name": "Drafting Supplies",
        "category_id": 2139
    },
    {
        "parent_category_id": 21,
        "category_name": "Books（old）",
        "category_id": 2202
    },
    {
        "parent_category_id": 21,
        "category_name": "Maps & Atlases",
        "category_id": 2209
    },
    {
        "parent_category_id": 21,
        "category_name": "Journal, Periodical & Magazines",
        "category_id": 2213
    },
    {
        "parent_category_id": 21,
        "category_name": "Stationery Sticker",
        "category_id": 200004276
    },
    {
        "parent_category_id": 21,
        "category_name": "Mailing & Shipping",
        "category_id": 201330702
    },
    {
        "parent_category_id": 21,
        "category_name": "Filing Products",
        "category_id": 201338004
    },
    {
        "parent_category_id": 21,
        "category_name": "Notebooks & Writing Pads",
        "category_id": 100003155
    },
    {
        "parent_category_id": 21,
        "category_name": "School Supplies",
        "category_id": 100003125
    },
    {
        "parent_category_id": 21,
        "category_name": "Tapes, Adhesives & Fasteners",
        "category_id": 100003134
    },
    {
        "parent_category_id": 21,
        "category_name": "Educational Equipment & Supplies",
        "category_id": 100003135
    },
    {
        "parent_category_id": 21,
        "category_name": "Office Binding Supplies",
        "category_id": 100003129
    },
    {
        "parent_category_id": 21,
        "category_name": "Art Tool Kits",
        "category_id": 100003131
    },
    {
        "parent_category_id": 21,
        "category_name": "Books",
        "category_id": 201236701
    },
    {
        "parent_category_id": 21,
        "category_name": "Desk Accessories & Organizer",
        "category_id": 211106
    },
    {
        "parent_category_id": 21,
        "category_name": "Art Supplies",
        "category_id": 211111
    },
    {
        "parent_category_id": 21,
        "category_name": "Presentation Supplies",
        "category_id": 212002
    },
    {
        "parent_category_id": 21,
        "category_name": "Accounting Supplies",
        "category_id": 200652001
    },
    {
        "category_name": "Toys & Hobbies",
        "category_id": 26
    },
    {
        "parent_category_id": 26,
        "category_name": "Games and Puzzles",
        "category_id": 200001726
    },
    {
        "parent_category_id": 26,
        "category_name": "Dolls & Stuffed Toys",
        "category_id": 200001725
    },
    {
        "parent_category_id": 26,
        "category_name": "Stress Relief Toy",
        "category_id": 200246142
    },
    {
        "parent_category_id": 26,
        "category_name": "Electronic Toys",
        "category_id": 200001388
    },
    {
        "parent_category_id": 26,
        "category_name": "Stuffed Animals & Plush",
        "category_id": 200001387
    },
    {
        "parent_category_id": 26,
        "category_name": "Remote Control Toys",
        "category_id": 200001385
    },
    {
        "parent_category_id": 26,
        "category_name": "Dolls & Accessories",
        "category_id": 200001389
    },
    {
        "parent_category_id": 26,
        "category_name": "Novelty & Gag Toys",
        "category_id": 200001384
    },
    {
        "parent_category_id": 26,
        "category_name": "Building & Construction Toys",
        "category_id": 200001383
    },
    {
        "parent_category_id": 26,
        "category_name": "Play Vehicles & Models",
        "category_id": 201534605
    },
    {
        "parent_category_id": 26,
        "category_name": "Outdoor Fun & Sports",
        "category_id": 100001719
    },
    {
        "parent_category_id": 26,
        "category_name": "Learning & Education",
        "category_id": 100001714
    },
    {
        "parent_category_id": 26,
        "category_name": "Pretend Play",
        "category_id": 100001716
    },
    {
        "parent_category_id": 26,
        "category_name": "Classic Toys",
        "category_id": 100001715
    },
    {
        "parent_category_id": 26,
        "category_name": "Baby & Toddler Toys",
        "category_id": 100001698
    },
    {
        "parent_category_id": 26,
        "category_name": "Hobby & Collectibles",
        "category_id": 200388154
    },
    {
        "parent_category_id": 26,
        "category_name": "High Tech Toys",
        "category_id": 200386159
    },
    {
        "parent_category_id": 26,
        "category_name": "Action & Toy Figures",
        "category_id": 201292714
    },
    {
        "parent_category_id": 26,
        "category_name": "Arts & Crafts, DIY toys",
        "category_id": 200389156
    },
    {
        "parent_category_id": 26,
        "category_name": "Pools & Water Fun",
        "category_id": 200389159
    },
    {
        "parent_category_id": 26,
        "category_name": "Kid's Party",
        "category_id": 200389146
    },
    {
        "category_name": "Security & Protection",
        "category_id": 30
    },
    {
        "parent_category_id": 30,
        "category_name": "IoT Devices",
        "category_id": 200330186
    },
    {
        "parent_category_id": 30,
        "category_name": "First Aid Kits",
        "category_id": 200001791
    },
    {
        "parent_category_id": 30,
        "category_name": "Building Automation",
        "category_id": 200327231
    },
    {
        "parent_category_id": 30,
        "category_name": "Disaster-relief Supplies",
        "category_id": 200327211
    },
    {
        "parent_category_id": 30,
        "category_name": "Public Broadcasting",
        "category_id": 200327212
    },
    {
        "parent_category_id": 30,
        "category_name": "Safes",
        "category_id": 200327196
    },
    {
        "parent_category_id": 30,
        "category_name": "Workplace Safety Supplies",
        "category_id": 3007
    },
    {
        "parent_category_id": 30,
        "category_name": "Fire Protection",
        "category_id": 3009
    },
    {
        "parent_category_id": 30,
        "category_name": "Video Surveillance",
        "category_id": 3011
    },
    {
        "parent_category_id": 30,
        "category_name": "Roadway Safety",
        "category_id": 3015
    },
    {
        "parent_category_id": 30,
        "category_name": "Access Control",
        "category_id": 3030
    },
    {
        "parent_category_id": 30,
        "category_name": "Security Inspection Device",
        "category_id": 200328267
    },
    {
        "parent_category_id": 30,
        "category_name": "Self Defense Supplies",
        "category_id": 200328217
    },
    {
        "parent_category_id": 30,
        "category_name": "UAV System & Robot",
        "category_id": 200332185
    },
    {
        "parent_category_id": 30,
        "category_name": "Transmission & Cables",
        "category_id": 200004343
    },
    {
        "parent_category_id": 30,
        "category_name": "Security Alarm",
        "category_id": 200004311
    },
    {
        "parent_category_id": 30,
        "category_name": "Intercom",
        "category_id": 200004310
    },
    {
        "parent_category_id": 30,
        "category_name": "Smart Card System",
        "category_id": 200004309
    },
    {
        "category_name": "Automobiles, Parts & Accessories",
        "category_id": 34
    },
    {
        "parent_category_id": 34,
        "category_name": "Car Lights",
        "category_id": 200002005
    },
    {
        "parent_category_id": 34,
        "category_name": "Chassis Parts",
        "category_id": 201902101
    },
    {
        "parent_category_id": 34,
        "category_name": "Exterior Accessories",
        "category_id": 200003427
    },
    {
        "parent_category_id": 34,
        "category_name": "Engines & Engine Parts",
        "category_id": 201902201
    },
    {
        "parent_category_id": 34,
        "category_name": "Interior Accessories",
        "category_id": 200003411
    },
    {
        "parent_category_id": 34,
        "category_name": "Electrical Equipment",
        "category_id": 201902301
    },
    {
        "parent_category_id": 34,
        "category_name": "Wear Parts",
        "category_id": 201902401
    },
    {
        "parent_category_id": 34,
        "category_name": "Exterior Parts",
        "category_id": 201902403
    },
    {
        "parent_category_id": 34,
        "category_name": "Car Electronics",
        "category_id": 200000285
    },
    {
        "parent_category_id": 34,
        "category_name": "Auto Replacement Parts",
        "category_id": 200000212
    },
    {
        "parent_category_id": 34,
        "category_name": "Car Lock System",
        "category_id": 201901903
    },
    {
        "parent_category_id": 34,
        "category_name": "New Energy Vehicle Parts & Accessories",
        "category_id": 201885506
    },
    {
        "parent_category_id": 34,
        "category_name": "Automotive Sensors",
        "category_id": 201902001
    },
    {
        "parent_category_id": 34,
        "category_name": "Car Services",
        "category_id": 201268984
    },
    {
        "parent_category_id": 34,
        "category_name": "Auto Sale",
        "category_id": 200004218
    },
    {
        "parent_category_id": 34,
        "category_name": "Other Vehicle Parts & Accessories",
        "category_id": 200004043
    },
    {
        "parent_category_id": 34,
        "category_name": "Interior Parts",
        "category_id": 201908801
    },
    {
        "parent_category_id": 34,
        "category_name": "Car Wash & Maintenance",
        "category_id": 200260142
    },
    {
        "parent_category_id": 34,
        "category_name": "Car Repair Tool",
        "category_id": 200259142
    },
    {
        "category_name": "Jewelry & Accessories",
        "category_id": 36
    },
    {
        "parent_category_id": 36,
        "category_name": "Fine Jewelry",
        "category_id": 200001680
    },
    {
        "parent_category_id": 36,
        "category_name": "Fashion Jewelry",
        "category_id": 1509
    },
    {
        "parent_category_id": 36,
        "category_name": "Jewelry Packaging & Display",
        "category_id": 200001479
    },
    {
        "parent_category_id": 36,
        "category_name": "Jewelry Tools & Equipments",
        "category_id": 200001478
    },
    {
        "parent_category_id": 36,
        "category_name": "Customized Jewelry",
        "category_id": 201239108
    },
    {
        "parent_category_id": 36,
        "category_name": "Smart Jewelry",
        "category_id": 200370154
    },
    {
        "parent_category_id": 36,
        "category_name": "Jewelry Making",
        "category_id": 201238105
    },
    {
        "category_name": "Lights & Lighting",
        "category_id": 39
    },
    {
        "parent_category_id": 39,
        "category_name": "Lighting Accessories",
        "category_id": 530
    },
    {
        "parent_category_id": 39,
        "category_name": "Professional Light",
        "category_id": 200001704
    },
    {
        "parent_category_id": 39,
        "category_name": "Indoor Lighting",
        "category_id": 1504
    },
    {
        "parent_category_id": 39,
        "category_name": "Holiday Lighting",
        "category_id": 150403
    },
    {
        "parent_category_id": 39,
        "category_name": "Outdoor Lighting",
        "category_id": 150401
    },
    {
        "parent_category_id": 39,
        "category_name": "Lighting Bulbs & Tubes",
        "category_id": 150402
    },
    {
        "parent_category_id": 39,
        "category_name": "Commercial Lighting",
        "category_id": 200001493
    },
    {
        "parent_category_id": 39,
        "category_name": "Novelty Lighting",
        "category_id": 200001067
    },
    {
        "parent_category_id": 39,
        "category_name": "Other Lights & Lighting Products",
        "category_id": 3999
    },
    {
        "parent_category_id": 39,
        "category_name": "Night Lights",
        "category_id": 39050508
    },
    {
        "parent_category_id": 39,
        "category_name": "LED Lighting",
        "category_id": 390501
    },
    {
        "parent_category_id": 39,
        "category_name": "Portable Lighting",
        "category_id": 390503
    },
    {
        "parent_category_id": 39,
        "category_name": "Special Engineering Lighting",
        "category_id": 200326144
    },
    {
        "category_name": "Consumer Electronics",
        "category_id": 44
    },
    {
        "parent_category_id": 44,
        "category_name": "Accessories & Parts",
        "category_id": 629
    },
    {
        "parent_category_id": 44,
        "category_name": "Smart Electronics",
        "category_id": 200003803
    },
    {
        "parent_category_id": 44,
        "category_name": "Electronic Cigarettes",
        "category_id": 200003561
    },
    {
        "parent_category_id": 44,
        "category_name": "Games & Accessories",
        "category_id": 100000310
    },
    {
        "parent_category_id": 44,
        "category_name": "Portable Audio & Video",
        "category_id": 100000306
    },
    {
        "parent_category_id": 44,
        "category_name": "Camera & Photo",
        "category_id": 100000305
    },
    {
        "parent_category_id": 44,
        "category_name": "Home Audio & Video",
        "category_id": 100000308
    },
    {
        "category_name": "Beauty & Health",
        "category_id": 66
    },
    {
        "parent_category_id": 66,
        "category_name": "Tattoo & Body Art",
        "category_id": 200001976
    },
    {
        "parent_category_id": 66,
        "category_name": "Sex Products",
        "category_id": 200001508
    },
    {
        "parent_category_id": 66,
        "category_name": "Sanitary Paper",
        "category_id": 1513
    },
    {
        "parent_category_id": 66,
        "category_name": "Health Care",
        "category_id": 200001355
    },
    {
        "parent_category_id": 66,
        "category_name": "Bath & Shower",
        "category_id": 200001288
    },
    {
        "parent_category_id": 66,
        "category_name": "Oral Hygiene",
        "category_id": 3305
    },
    {
        "parent_category_id": 66,
        "category_name": "Skin Care",
        "category_id": 3306
    },
    {
        "parent_category_id": 66,
        "category_name": "Fragrances & Deodorants",
        "category_id": 200001221
    },
    {
        "parent_category_id": 66,
        "category_name": "Tools & Accessories",
        "category_id": 200001187
    },
    {
        "parent_category_id": 66,
        "category_name": "Hair Care & Styling",
        "category_id": 200001168
    },
    {
        "parent_category_id": 66,
        "category_name": "Nail Art & Tools",
        "category_id": 200001147
    },
    {
        "parent_category_id": 66,
        "category_name": "Makeup",
        "category_id": 660103
    },
    {
        "parent_category_id": 66,
        "category_name": "Shaving & Hair Removal",
        "category_id": 660302
    },
    {
        "parent_category_id": 66,
        "category_name": "Beauty Equipment",
        "category_id": 201169002
    },
    {
        "parent_category_id": 66,
        "category_name": "Dental Supplies",
        "category_id": 201248902
    },
    {
        "parent_category_id": 66,
        "category_name": "Massage & Relaxation",
        "category_id": 201217706
    },
    {
        "parent_category_id": 66,
        "category_name": "Skin Care Tool",
        "category_id": 100000616
    },
    {
        "category_name": "Weddings & Events",
        "category_id": 320
    },
    {
        "parent_category_id": 320,
        "category_name": "Wedding Party Dress",
        "category_id": 200000410
    },
    {
        "parent_category_id": 320,
        "category_name": "Special Occasion Dresses",
        "category_id": 200000749
    },
    {
        "parent_category_id": 320,
        "category_name": "Formal Occasion Dresses",
        "category_id": 201236002
    },
    {
        "parent_category_id": 320,
        "category_name": "Bespoke Occasion Dresses",
        "category_id": 201238406
    },
    {
        "parent_category_id": 320,
        "category_name": "Wedding Accessories",
        "category_id": 100005787
    },
    {
        "parent_category_id": 320,
        "category_name": "Wedding Dresses",
        "category_id": 32005
    },
    {
        "category_name": "Shoes",
        "category_id": 322
    },
    {
        "parent_category_id": 322,
        "category_name": "Women's Shoes",
        "category_id": 200133142
    },
    {
        "parent_category_id": 322,
        "category_name": "Men's Shoes",
        "category_id": 200131145
    },
    {
        "parent_category_id": 322,
        "category_name": "Mules & Clogs",
        "category_id": 200001000
    },
    {
        "parent_category_id": 322,
        "category_name": "Shoe Accessories",
        "category_id": 32210
    },
    {
        "parent_category_id": 322,
        "category_name": "Other Shoes",
        "category_id": 32299
    },
    {
        "category_name": "Electronic Components & Supplies",
        "category_id": 502
    },
    {
        "parent_category_id": 502,
        "category_name": "Electronic Data Systems",
        "category_id": 504
    },
    {
        "parent_category_id": 502,
        "category_name": "Electronics Stocks",
        "category_id": 515
    },
    {
        "parent_category_id": 502,
        "category_name": "Electronic Signs",
        "category_id": 150407
    },
    {
        "parent_category_id": 502,
        "category_name": "EL Products",
        "category_id": 150412
    },
    {
        "parent_category_id": 502,
        "category_name": "Active Components",
        "category_id": 4001
    },
    {
        "parent_category_id": 502,
        "category_name": "Electronics Production Machinery",
        "category_id": 4002
    },
    {
        "parent_category_id": 502,
        "category_name": "Electronic Accessories & Supplies",
        "category_id": 4003
    },
    {
        "parent_category_id": 502,
        "category_name": "Optoelectronic Displays",
        "category_id": 4004
    },
    {
        "parent_category_id": 502,
        "category_name": "Passive Components",
        "category_id": 4005
    },
    {
        "parent_category_id": 502,
        "category_name": "Other Electronic Components",
        "category_id": 4099
    },
    {
        "category_name": "Phones & Telecommunications",
        "category_id": 509
    },
    {
        "parent_category_id": 509,
        "category_name": "Sim Cards & Accessories",
        "category_id": 200001598
    },
    {
        "parent_category_id": 509,
        "category_name": "Walkie Talkie Parts & Accessories",
        "category_id": 200380144
    },
    {
        "parent_category_id": 509,
        "category_name": "Walkie Talkie",
        "category_id": 50906
    },
    {
        "parent_category_id": 509,
        "category_name": "Mobile Phone Parts",
        "category_id": 201084002
    },
    {
        "parent_category_id": 509,
        "category_name": "Mobile Phone Accessories",
        "category_id": 100001205
    },
    {
        "parent_category_id": 509,
        "category_name": "Communication Equipment",
        "category_id": 100001204
    },
    {
        "parent_category_id": 509,
        "category_name": "Mobile Phones",
        "category_id": 5090301
    },
    {
        "category_name": "Test category 06",
        "category_id": 127698009
    },
    {
        "parent_category_id": 127698009,
        "category_id": 127698001
    },
    {
        "parent_category_id": 127698009,
        "category_id": 127698003
    },
    {
        "parent_category_id": 127698009,
        "category_name": "post cat q(test)",
        "category_id": 127770007
    },
    {
        "parent_category_id": 127698009,
        "category_name": "AutoTestCategory",
        "category_id": 202172601
    },
    {
        "parent_category_id": 127698009,
        "category_name": "test zy non leaf1",
        "category_id": 202171001
    },
    {
        "parent_category_id": 127698009,
        "category_name": "AE test06",
        "category_id": 201831701
    },
    {
        "category_name": "Tools",
        "category_id": 1420
    },
    {
        "parent_category_id": 1420,
        "category_name": "Power Tools",
        "category_id": 1417
    },
    {
        "parent_category_id": 1420,
        "category_name": "Welding & Soldering Supplies",
        "category_id": 1427
    },
    {
        "parent_category_id": 1420,
        "category_name": "Abrasives",
        "category_id": 1428
    },
    {
        "parent_category_id": 1420,
        "category_name": "Woodworking Machinery",
        "category_id": 1431
    },
    {
        "parent_category_id": 1420,
        "category_name": "Welding Equipment",
        "category_id": 1440
    },
    {
        "parent_category_id": 1420,
        "category_name": "Measurement & Analysis Instruments",
        "category_id": 1537
    },
    {
        "parent_category_id": 1420,
        "category_name": "Riveter Guns",
        "category_id": 200183146
    },
    {
        "parent_category_id": 1420,
        "category_name": "Agricultural Machinery & Equipment",
        "category_id": 201919301
    },
    {
        "parent_category_id": 1420,
        "category_name": "Abrasive Tools",
        "category_id": 4204
    },
    {
        "parent_category_id": 1420,
        "category_name": "Woodworking Machinery Parts",
        "category_id": 4338
    },
    {
        "parent_category_id": 1420,
        "category_name": "Power Tool Parts & Accessories",
        "category_id": 201252405
    },
    {
        "parent_category_id": 1420,
        "category_name": "Tool Sets",
        "category_id": 200003955
    },
    {
        "parent_category_id": 1420,
        "category_name": "Hand Tools",
        "category_id": 142003
    },
    {
        "parent_category_id": 1420,
        "category_name": "Tool Parts",
        "category_id": 142001
    },
    {
        "parent_category_id": 1420,
        "category_name": "Construction Tools",
        "category_id": 142016
    },
    {
        "parent_category_id": 1420,
        "category_name": "Other Tools",
        "category_id": 142099
    },
    {
        "parent_category_id": 1420,
        "category_name": "Garden Tools",
        "category_id": 12503
    },
    {
        "parent_category_id": 1420,
        "category_name": "Machinery & Accessories",
        "category_id": 100007188
    },
    {
        "parent_category_id": 1420,
        "category_name": "Material Handling Tools",
        "category_id": 100007498
    },
    {
        "parent_category_id": 1420,
        "category_name": "Tools Packaging",
        "category_id": 100007485
    },
    {
        "parent_category_id": 1420,
        "category_name": "Saw Blade",
        "category_id": 100006471
    },
    {
        "parent_category_id": 1420,
        "category_name": "Drill Bit",
        "category_id": 100006468
    },
    {
        "category_name": "Mother & Kids",
        "category_id": 1501
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Clothing",
        "category_id": 310
    },
    {
        "parent_category_id": 1501,
        "category_name": "Children's Clothing",
        "category_id": 311
    },
    {
        "parent_category_id": 1501,
        "category_name": "Activity & Gear",
        "category_id": 200002039
    },
    {
        "parent_category_id": 1501,
        "category_name": "Feeding",
        "category_id": 200002038
    },
    {
        "parent_category_id": 1501,
        "category_name": "Safety",
        "category_id": 200002006
    },
    {
        "parent_category_id": 1501,
        "category_name": "Diapering & Toilet Training",
        "category_id": 200328147
    },
    {
        "parent_category_id": 1501,
        "category_name": "Pregnancy & Maternity",
        "category_id": 200328149
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Diaper & Wipes",
        "category_id": 201671802
    },
    {
        "parent_category_id": 1501,
        "category_name": "Car Seats & Accessories",
        "category_id": 200329142
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Care",
        "category_id": 200001330
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Shoes",
        "category_id": 200000937
    },
    {
        "parent_category_id": 1501,
        "category_name": "Children's Shoes",
        "category_id": 200000947
    },
    {
        "parent_category_id": 1501,
        "category_name": "Maternity Clothings",
        "category_id": 200000500
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Sterilization & Appliances",
        "category_id": 201678201
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Souvenirs",
        "category_id": 200332157
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Furniture",
        "category_id": 200332158
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Food",
        "category_id": 200364142
    },
    {
        "parent_category_id": 1501,
        "category_name": "Baby Strollers&Accessories",
        "category_id": 201273175
    },
    {
        "parent_category_id": 1501,
        "category_name": "Bedding",
        "category_id": 100003020
    },
    {
        "parent_category_id": 1501,
        "category_name": "Kids Accessories",
        "category_id": 201293501
    },
    {
        "category_name": "Furniture",
        "category_id": 1503
    },
    {
        "parent_category_id": 1503,
        "category_name": "Home Furniture",
        "category_id": 150303
    },
    {
        "parent_category_id": 1503,
        "category_name": "Office Furniture",
        "category_id": 150304
    },
    {
        "parent_category_id": 1503,
        "category_name": "Commercial Furniture",
        "category_id": 150301
    },
    {
        "parent_category_id": 1503,
        "category_name": "Outdoor Furniture",
        "category_id": 150302
    },
    {
        "parent_category_id": 1503,
        "category_name": "Other Furniture",
        "category_id": 150399
    },
    {
        "parent_category_id": 1503,
        "category_name": "Furniture Parts",
        "category_id": 3708
    },
    {
        "parent_category_id": 1503,
        "category_name": "Furniture Accessories",
        "category_id": 3712
    },
    {
        "parent_category_id": 1503,
        "category_name": "Bar Furniture",
        "category_id": 100001029
    },
    {
        "parent_category_id": 1503,
        "category_name": "Children Furniture",
        "category_id": 100003019
    },
    {
        "parent_category_id": 1503,
        "category_name": "Café Furniture",
        "category_id": 200130145
    },
    {
        "category_name": "Watches",
        "category_id": 1511
    },
    {
        "parent_category_id": 1511,
        "category_name": "Men's Watches",
        "category_id": 200362146
    },
    {
        "parent_category_id": 1511,
        "category_name": "Women's Watches",
        "category_id": 200362145
    },
    {
        "parent_category_id": 1511,
        "category_name": "Children's Watches",
        "category_id": 200362144
    },
    {
        "parent_category_id": 1511,
        "category_name": "Couple Watches",
        "category_id": 200362143
    },
    {
        "parent_category_id": 1511,
        "category_name": "Watches Accessories",
        "category_id": 200000121
    },
    {
        "parent_category_id": 1511,
        "category_name": "Pocket & Fob Watches",
        "category_id": 200000126
    },
    {
        "category_name": "Luggage & Bags",
        "category_id": 1524
    },
    {
        "parent_category_id": 1524,
        "category_name": "Summer Bags",
        "category_id": 201296801
    },
    {
        "parent_category_id": 1524,
        "category_name": "Travel Accessories",
        "category_id": 201296102
    },
    {
        "parent_category_id": 1524,
        "category_name": "Winter Bags",
        "category_id": 201295902
    },
    {
        "parent_category_id": 1524,
        "category_name": "Kids' Bags",
        "category_id": 201376929
    },
    {
        "parent_category_id": 1524,
        "category_name": "Travel Bags",
        "category_id": 201294604
    },
    {
        "parent_category_id": 1524,
        "category_name": "School Bags",
        "category_id": 380520
    },
    {
        "parent_category_id": 1524,
        "category_name": "Wallets & Holders",
        "category_id": 3803
    },
    {
        "parent_category_id": 1524,
        "category_name": "Special Purpose Bags",
        "category_id": 3805
    },
    {
        "parent_category_id": 1524,
        "category_name": "Leisure Bags",
        "category_id": 3806
    },
    {
        "parent_category_id": 1524,
        "category_name": "Luggage & Travel Bags",
        "category_id": 152404
    },
    {
        "parent_category_id": 1524,
        "category_name": "Backpacks",
        "category_id": 152401
    },
    {
        "parent_category_id": 1524,
        "category_name": "Briefcases",
        "category_id": 152402
    },
    {
        "parent_category_id": 1524,
        "category_name": "Bag Parts & Accessories",
        "category_id": 152409
    },
    {
        "parent_category_id": 1524,
        "category_name": "Other Luggage & Bags",
        "category_id": 152499
    },
    {
        "parent_category_id": 1524,
        "category_name": "Luggage",
        "category_id": 201298604
    },
    {
        "parent_category_id": 1524,
        "category_name": "Waist Packs",
        "category_id": 201396505
    },
    {
        "parent_category_id": 1524,
        "category_name": "Women's Handbags",
        "category_id": 201336907
    },
    {
        "parent_category_id": 1524,
        "category_name": "Men's Bags",
        "category_id": 201337808
    },
    {
        "parent_category_id": 1524,
        "category_name": "Chest Bags",
        "category_id": 201401303
    },
    {
        "category_name": "Women's Clothing",
        "category_id": 200000345
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Skirts",
        "category_id": 349
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Swimwears",
        "category_id": 200001918
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Parkas",
        "category_id": 200001908
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Blazer & Suits",
        "category_id": 200001912
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Fur & Faux Fur",
        "category_id": 200001911
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Faux Leather",
        "category_id": 200001909
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Women's Sets",
        "category_id": 200003494
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Ready-to-wear Dresses",
        "category_id": 201771210
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Jumpsuits, Playsuits & Bodysuits",
        "category_id": 200000362
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Jeans",
        "category_id": 200000361
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Shorts",
        "category_id": 200000367
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Pants & Capris",
        "category_id": 200000366
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Sweaters",
        "category_id": 200000373
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Hoodies & Sweatshirts",
        "category_id": 200000348
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Dresses",
        "category_id": 200000347
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Blouses & Shirts",
        "category_id": 200000346
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Leggings",
        "category_id": 200000865
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Tops & Tees",
        "category_id": 200000778
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Coats & Jackets",
        "category_id": 200000796
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Matching Sets",
        "category_id": 201531101
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Real Fur",
        "category_id": 200003908
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Shirts & Blouses",
        "category_id": 201303001
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Plus Size Clothes",
        "category_id": 201516501
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Muslim Fashion",
        "category_id": 201515701
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Genuine Leather",
        "category_id": 200129142
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Sweaters&Jumpers",
        "category_id": 201241002
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Jumpsuits&Rompers",
        "category_id": 201240602
    },
    {
        "parent_category_id": 200000345,
        "category_name": "Down Coats",
        "category_id": 200128142
    },
    {
        "category_name": "Men's Clothing",
        "category_id": 200000343
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Shirts",
        "category_id": 348
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Swimwears",
        "category_id": 200001860
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Parkas",
        "category_id": 200001877
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Suits & Blazer",
        "category_id": 200001819
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Men's Sets",
        "category_id": 200003495
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Jeans",
        "category_id": 200000378
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Hoodies & Sweatshirts",
        "category_id": 200000344
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Tops & Tees",
        "category_id": 200000779
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Coats & Jackets",
        "category_id": 200000795
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Shorts",
        "category_id": 200005141
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Sweaters",
        "category_id": 201236604
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Muslim Fashion",
        "category_id": 201515601
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Pants",
        "category_id": 201240601
    },
    {
        "parent_category_id": 200000343,
        "category_name": "Down Coats",
        "category_id": 200128143
    },
    {
        "category_name": "Apparel Accessories",
        "category_id": 200000297
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Collar Stays",
        "category_id": 200346143
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Scarf, Hat & Glove Sets",
        "category_id": 33906
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Eyewear & Accessories",
        "category_id": 200000440
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Headwear",
        "category_id": 200000395
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Gloves & Mittens",
        "category_id": 200000394
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Earmuffs",
        "category_id": 200000393
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Handkerchiefs",
        "category_id": 200000400
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Scarves & Wraps",
        "category_id": 200000399
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Arm Warmers",
        "category_id": 200000392
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Hats & Caps",
        "category_id": 200000402
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Belts",
        "category_id": 200000298
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Cummerbunds",
        "category_id": 200000306
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Ties",
        "category_id": 200000305
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Mask",
        "category_id": 200295142
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Knee Sleeve",
        "category_id": 200295143
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Suspenders",
        "category_id": 3280111
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Apparel Fabrics & Textiles",
        "category_id": 201196803
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Belt Buckle",
        "category_id": 200301150
    },
    {
        "parent_category_id": 200000297,
        "category_name": "new Scarf &Wrap",
        "category_id": 201531601
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Arm Warmer",
        "category_id": 201532001
    },
    {
        "parent_category_id": 200000297,
        "category_name": "New Headwear",
        "category_id": 201303301
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Pocket Squares",
        "category_id": 200392144
    },
    {
        "parent_category_id": 200000297,
        "category_name": "Fashionable Canes",
        "category_id": 201161809
    },
    {
        "parent_category_id": 200000297,
        "category_name": "DIY Accessories",
        "category_id": 201159809
    },
    {
        "category_name": "Hair Extensions & Wigs",
        "category_id": 200165144
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Human Hair (For White)",
        "category_id": 200166144
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Synthetic Hair",
        "category_id": 200167144
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Synthetic Hair(For White)",
        "category_id": 200396142
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Hair For Asian",
        "category_id": 202170002
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Beauty Supply",
        "category_id": 200317142
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Human Hair (For Black)",
        "category_id": 200168146
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Blend Wigs（For White）",
        "category_id": 201222636
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Human Wigs( For Black)",
        "category_id": 127886013
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Hair Salon Supply",
        "category_id": 200319142
    },
    {
        "parent_category_id": 200165144,
        "category_name": "Hair Tools & Accessories",
        "category_id": 201303603
    },
    {
        "category_name": "Special Category",
        "category_id": 200001075
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Down payment/ Purchasing Agent",
        "category_id": 200001627
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Other",
        "category_id": 200001620
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Upcoming Products",
        "category_id": 200001623
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Giveaways",
        "category_id": 200001621
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Custom-made Charge",
        "category_id": 200165143
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Additional Pay on Your Order",
        "category_id": 200001079
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Checkout Link",
        "category_id": 200001078
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Prepaid Digital Codes",
        "category_id": 201350802
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Shoesize Chart Testing Only",
        "category_id": 202186401
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Giftcard",
        "category_id": 201252004
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Coupons",
        "category_id": 201249605
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Test",
        "category_id": 200004358
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Beginner for XinXiaoYuan",
        "category_id": 200004270
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Mobile Phone Recharge",
        "category_id": 200003892
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Overseas Warehouse",
        "category_id": 200003864
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Platform Coupon",
        "category_id": 200003560
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Wallpaper Sample",
        "category_id": 200726001
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Lottery Tickets（Without VAT）",
        "category_id": 201600601
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Mini App",
        "category_id": 201355115
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Event Ticket",
        "category_id": 201174708
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Giftcard1",
        "category_id": 200024143
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Software &Games (without VAT)",
        "category_id": 201303705
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Custom-made-Charge",
        "category_id": 200376142
    },
    {
        "parent_category_id": 200001075,
        "category_name": "Size chart testing only",
        "category_id": 202176801
    },
    {
        "category_name": "Underwear",
        "category_id": 200574005
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Women's Sleep & Lounge",
        "category_id": 200001894
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Bikinis",
        "category_id": 200001866
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Men's Underwears",
        "category_id": 200001865
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Men's Sleep & Lounge",
        "category_id": 200001813
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Men's Socks",
        "category_id": 200000384
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Women's Intimates",
        "category_id": 200000349
    },
    {
        "parent_category_id": 200574005,
        "category_name": "Women's Socks & Hosiery",
        "category_id": 200000854
    },
    {
        "category_name": "Novelty & Special Use",
        "category_id": 200000532
    },
    {
        "parent_category_id": 200000532,
        "category_name": "Exotic Apparel",
        "category_id": 200000740
    },
    {
        "parent_category_id": 200000532,
        "category_name": "Work Wear & Uniforms",
        "category_id": 200000668
    },
    {
        "parent_category_id": 200000532,
        "category_name": "World Apparel",
        "category_id": 200000666
    },
    {
        "parent_category_id": 200000532,
        "category_name": "Costumes & Accessories",
        "category_id": 200000663
    },
    {
        "parent_category_id": 200000532,
        "category_name": "Functional Apparel",
        "category_id": 201302006
    },
    {
        "parent_category_id": 200000532,
        "category_name": "Stage & Dance Wear",
        "category_id": 100005769
    },
    {
        "category_name": "Virtual Products",
        "category_id": 201169612
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Software & Games",
        "category_id": 201360737
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Mobile Phone  Recharge",
        "category_id": 201508601
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Offline Activity For New Seller",
        "category_id": 201377714
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Topup Commission Category",
        "category_id": 201809502
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Mobile Phone Recharge1111",
        "category_id": 201354843
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Giftcard",
        "category_id": 201352363
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Prepaid Digital Codes",
        "category_id": 201353146
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Giftcard Commission Category",
        "category_id": 201810901
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Coupons",
        "category_id": 201355944
    },
    {
        "parent_category_id": 201169612,
        "category_name": "Event Ticket",
        "category_id": 201356254
    },
    {
        "category_name": "Sports Shoes,Clothing&Accessories",
        "category_id": 201768104
    },
    {
        "parent_category_id": 201768104,
        "category_name": "Sportswear & Accessories",
        "category_id": 301
    },
    {
        "parent_category_id": 201768104,
        "category_name": "Dance",
        "category_id": 201445239
    },
    {
        "parent_category_id": 201768104,
        "category_name": "Sneakers",
        "category_id": 200000950
    },
    {
        "parent_category_id": 201768104,
        "category_name": "Sport Bags",
        "category_id": 200046142
    },
    {
        "category_name": "Second-Hand",
        "category_id": 201520802
    },
    {
        "parent_category_id": 201520802,
        "category_name": "Used Phones",
        "category_id": 201523301
    },
    {
        "category_name": "Motorcycle Equipments & Parts",
        "category_id": 201355758
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Boats",
        "category_id": 201377402
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Motorcycle Parts",
        "category_id": 201359843
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Motorcycle & ATV",
        "category_id": 201352247
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Motorcycle Equipments",
        "category_id": 201352950
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Modification&Protection",
        "category_id": 202057610
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Motorcycle Accessories",
        "category_id": 201359147
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Ornamental & Cleaning",
        "category_id": 201357051
    },
    {
        "parent_category_id": 201355758,
        "category_name": "Aircraft",
        "category_id": 201371802
    }
];
const userConfig = GithubBlogConfig({
    // site domain
    // domain: 'http://localhost:3000',
    domain: 'https://alie-promotion-blog.vercel.app',

    // site metadata
    title: 'alie-promotion-blog',
    dynamicTitle: true,
    description: 'Generated by create next app',
    webSiteImage: 'https://avatars.githubusercontent.com/u/102360897?v=4',

    git: {
        repository: 'alie-promotion-blog-storage',
        owner: 'jun-young1993'
    },
    headerMenus: [{
        type: 'markdown-viewer',
        path: '/',
        title: 'About Me'
    }],
    githubBlogShowPaths: alieCategories.map((item) => {
        return {
            type: 'contents',
            path: item.category_name,
        }
    }),
    userSitemap: [
        'ads.txt'
    ],
    ignorePaths: [

    ],

    nextConfig: {
        cache: {
            revalidate : 1
        }
    },


    // We use wikiLinks such as [[path]] and ![[test.png]]. Please enter the repository's path.
    wikiLink: 'images',

    // Whether to use table of contents. The default value is true
    tableOfContents: true,
    // This specifies the heading tag number as a string for the table of contents.
    // The default value is up to h3, and it can be spcified up to '6'
    tableOfContentsMaxLevel: '3'
});
export default userConfig;