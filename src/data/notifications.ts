
const passiveNotifications = [
  { id: 1, text: "Coffee is a popular morning beverage." },
  { id: 2, text: "Traveling abroad can be an enriching experience." },
  { id: 3, text: "Rainy days often make people feel cozy." },
  { id: 4, text: "Pets can bring joy and companionship." },
  { id: 5, text: "Reading books is a great way to relax." },
  { id: 6, text: "Blue is a calming color for many people." },
  { id: 7, text: "Cooking at home can be healthier than eating out." },
  { id: 8, text: "Concerts are a fun way to enjoy live music." },
  { id: 9, text: "Keeping your phone charged is important." },
  { id: 10, text: "Playing a musical instrument can be rewarding." },
  { id: 11, text: "Camping allows you to connect with nature." },
  { id: 12, text: "Parking a car outside can expose it to the elements." },
  { id: 13, text: "Spicy food is enjoyed by many cultures." },
  { id: 14, text: "Riding a bicycle is a good form of exercise." },
  { id: 15, text: "Winter is a favorite season for those who love snow." },
  { id: 16, text: "Watching the news keeps you informed." },
  { id: 17, text: "Yoga promotes flexibility and mindfulness." },
  { id: 18, text: "A full refrigerator means fewer trips to the store." },
  { id: 19, text: "Gardening can be a relaxing hobby." },
  { id: 20, text: "Boating is a popular recreational activity." },
  { id: 21, text: "Dogs are often considered loyal companions." },
  { id: 22, text: "Painting and drawing can be creative outlets." },
  { id: 23, text: "Skiing is a popular winter sport." },
  { id: 24, text: "Curly hair can be styled in many ways." },
  { id: 25, text: "Dancing is a fun way to stay active." },
  { id: 26, text: "Museums offer a glimpse into history and culture." },
  { id: 27, text: "Apples are a common and healthy snack." },
  { id: 28, text: "Wearing glasses can improve vision." },
  { id: 29, text: "Fishing is a peaceful outdoor activity." },
  { id: 30, text: "Comedy movies are great for a good laugh." },
  { id: 31, text: "Having siblings can teach valuable life lessons." },
  { id: 32, text: "Baking a cake can be a fun family activity." },
  { id: 33, text: "Christmas is celebrated by many around the world." },
  { id: 34, text: "Swimming is a full-body workout." },
  { id: 35, text: "Beaches are popular vacation destinations." },
  { id: 36, text: "Soccer is played and watched worldwide." },
  { id: 37, text: "Hiking is a great way to explore nature." },
  { id: 38, text: "Weddings are joyous occasions." },
  { id: 39, text: "Chocolate ice cream is a classic favorite." },
  { id: 40, text: "Bicycles are an eco-friendly mode of transport." },
  { id: 41, text: "Zoos provide educational experiences about animals." },
  { id: 42, text: "Roses are often associated with love." },
  { id: 43, text: "Fiction books can transport readers to other worlds." },
  { id: 44, text: "Chess is a game of strategy and skill." },
  { id: 45, text: "Mornings can be a productive time of day." },
  { id: 46, text: "Gardening can yield fresh produce." },
  { id: 47, text: "Theme parks offer thrilling rides and attractions." },
  { id: 48, text: "Tea is enjoyed in many cultures." },
  { id: 49, text: "Singing can lift your spirits." },
  { id: 50, text: "Trains are a convenient way to travel." },
  { id: 51, text: "Italian cuisine is known for its rich flavors." },
  { id: 52, text: "A driver's license is a rite of passage for many." },
  { id: 53, text: "Libraries are treasure troves of knowledge." },
  { id: 54, text: "Cake is a popular dessert for celebrations." },
  { id: 55, text: "Watching sports can be an exciting pastime." },
  { id: 56, text: "Festivals celebrate cultural traditions." },
  { id: 57, text: "Rock music has a wide and devoted fan base." },
  { id: 58, text: "Writing can be a form of self-expression." },
  { id: 59, text: "Farms are essential for food production." },
  { id: 60, text: "Summer is a time for vacations and relaxation." },
  { id: 61, text: "Puzzles can challenge the mind." },
  { id: 62, text: "Circuses entertain with acrobatics and animals." },
  { id: 63, text: "Broccoli is a nutritious vegetable." },
  { id: 64, text: "Movies provide entertainment and storytelling." },
  { id: 65, text: "Theaters offer live performances and plays." },
  { id: 66, text: "Reading is a hobby that expands the mind." },
  { id: 67, text: "Photography captures moments in time." },
  { id: 68, text: "Mountains offer breathtaking views." },
  { id: 69, text: "Popcorn is a popular movie snack." },
  { id: 70, text: "Traveling broadens your perspective." },
  { id: 71, text: "Vineyards produce grapes for wine-making." },
  { id: 72, text: "Cats are known for their independence." },
  { id: 73, text: "Video games are enjoyed by people of all ages." },
  { id: 74, text: "Waterfalls are natural wonders." },
  { id: 75, text: "Green is often associated with nature." },
  { id: 76, text: "Knitting and crocheting are creative crafts." },
  { id: 77, text: "Deserts have unique ecosystems." },
  { id: 78, text: "Bananas are a convenient snack." },
  { id: 79, text: "Podcasts are a popular form of media." },
  { id: 80, text: "Castles are historical landmarks." },
  { id: 81, text: "Coffee is a staple in many morning routines." },
  { id: 82, text: "Yoga promotes physical and mental well-being." },
  { id: 83, text: "Rainforests are rich in biodiversity." },
  { id: 84, text: "Halloween is celebrated with costumes and candy." },
  { id: 85, text: "Going to the gym can improve fitness." },
  { id: 86, text: "Lighthouses guide ships safely to shore." },
  { id: 87, text: "Sunny weather is often associated with happiness." },
  { id: 88, text: "Board games are great for family gatherings." },
  { id: 89, text: "Canyons are formed by erosion over time." },
  { id: 90, text: "Birds are admired for their ability to fly." }
];

const activeNotifications = [
  { id: 1, text: "Do you like coffee?" },
  { id: 2, text: "Have you ever traveled abroad?" },
  { id: 3, text: "Is it raining today?" },
  { id: 4, text: "Do you own a pet?" },
  { id: 5, text: "Have you read a book this month?" },
  { id: 6, text: "Is your favorite color blue?" },
  { id: 7, text: "Do you enjoy cooking?" },
  { id: 8, text: "Have you ever been to a concert?" },
  { id: 9, text: "Is your phone fully charged?" },
  { id: 10, text: "Do you play a musical instrument?" },
  { id: 11, text: "Have you ever gone camping?" },
  { id: 12, text: "Is your car parked outside?" },
  { id: 13, text: "Do you like spicy food?" },
  { id: 14, text: "Have you ever ridden a bicycle?" },
  { id: 15, text: "Is your favorite season winter?" },
  { id: 16, text: "Do you watch the news regularly?" },
  { id: 17, text: "Have you ever tried yoga?" },
  { id: 18, text: "Is your refrigerator full?" },
  { id: 19, text: "Do you have a garden?" },
  { id: 20, text: "Have you ever been on a boat?" },
  { id: 21, text: "Is your favorite animal a dog?" },
  { id: 22, text: "Do you enjoy painting or drawing?" },
  { id: 23, text: "Have you ever been skiing?" },
  { id: 24, text: "Is your hair naturally curly?" },
  { id: 25, text: "Do you like to dance?" },
  { id: 26, text: "Have you ever visited a museum?" },
  { id: 27, text: "Is your favorite fruit an apple?" },
  { id: 28, text: "Do you wear glasses?" },
  { id: 29, text: "Have you ever gone fishing?" },
  { id: 30, text: "Is your favorite movie genre comedy?" },
  { id: 31, text: "Do you have a sibling?" },
  { id: 32, text: "Have you ever baked a cake?" },
  { id: 33, text: "Is your favorite holiday Christmas?" },
  { id: 34, text: "Do you like to swim?" },
  { id: 35, text: "Have you ever been to a beach?" },
  { id: 36, text: "Is your favorite sport soccer?" },
  { id: 37, text: "Do you enjoy hiking?" },
  { id: 38, text: "Have you ever attended a wedding?" },
  { id: 39, text: "Is your favorite ice cream flavor chocolate?" },
  { id: 40, text: "Do you own a bicycle?" },
  { id: 41, text: "Have you ever been to a zoo?" },
  { id: 42, text: "Is your favorite flower a rose?" },
  { id: 43, text: "Do you like to read fiction?" },
  { id: 44, text: "Have you ever played chess?" },
  { id: 45, text: "Is your favorite time of day morning?" },
  { id: 46, text: "Do you enjoy gardening?" },
  { id: 47, text: "Have you ever been to a theme park?" },
  { id: 48, text: "Is your favorite drink tea?" },
  { id: 49, text: "Do you like to sing?" },
  { id: 50, text: "Have you ever been on a train?" },
  { id: 51, text: "Is your favorite cuisine Italian?" },
  { id: 52, text: "Do you have a driver's license?" },
  { id: 53, text: "Have you ever been to a library?" },
  { id: 54, text: "Is your favorite dessert cake?" },
  { id: 55, text: "Do you enjoy watching sports?" },
  { id: 56, text: "Have you ever been to a festival?" },
  { id: 57, text: "Is your favorite type of music rock?" },
  { id: 58, text: "Do you like to write?" },
  { id: 59, text: "Have you ever been to a farm?" },
  { id: 60, text: "Is your favorite season summer?" },
  { id: 61, text: "Do you enjoy puzzles?" },
  { id: 62, text: "Have you ever been to a circus?" },
  { id: 63, text: "Is your favorite vegetable broccoli?" },
  { id: 64, text: "Do you like to watch movies?" },
  { id: 65, text: "Have you ever been to a theater?" },
  { id: 66, text: "Is your favorite hobby reading?" },
  { id: 67, text: "Do you enjoy photography?" },
  { id: 68, text: "Have you ever been to a mountain?" },
  { id: 69, text: "Is your favorite snack popcorn?" },
  { id: 70, text: "Do you like to travel?" },
  { id: 71, text: "Have you ever been to a vineyard?" },
  { id: 72, text: "Is your favorite animal a cat?" },
  { id: 73, text: "Do you enjoy playing video games?" },
  { id: 74, text: "Have you ever been to a waterfall?" },
  { id: 75, text: "Is your favorite color green?" },
  { id: 76, text: "Do you like to knit or crochet?" },
  { id: 77, text: "Have you ever been to a desert?" },
  { id: 78, text: "Is your favorite fruit a banana?" },
  { id: 79, text: "Do you enjoy listening to podcasts?" },
  { id: 80, text: "Have you ever been to a castle?" },
  { id: 81, text: "Is your favorite drink coffee?" },
  { id: 82, text: "Do you like to do yoga?" },
  { id: 83, text: "Have you ever been to a rainforest?" },
  { id: 84, text: "Is your favorite holiday Halloween?" },
  { id: 85, text: "Do you enjoy going to the gym?" },
  { id: 86, text: "Have you ever been to a lighthouse?" },
  { id: 87, text: "Is your favorite type of weather sunny?" },
  { id: 88, text: "Do you like to play board games?" },
  { id: 89, text: "Have you ever been to a canyon?" },
  { id: 90, text: "Is your favorite animal a bird?" },
  { id: 91, text: "Do you enjoy going to the beach?" },
  { id: 92, text: "Have you ever been to a glacier?" },
  { id: 93, text: "Is your favorite flower a tulip?" },
  { id: 94, text: "Do you like to cook new recipes?" },
  { id: 95, text: "Have you ever been to a hot spring?" },
  { id: 96, text: "Is your favorite time of year autumn?" },
  { id: 97, text: "Do you enjoy watching documentaries?" },
  { id: 98, text: "Have you ever been to a national park?" },
  { id: 99, text: "Is your favorite dessert ice cream?" },
  { id: 100, text: "Do you like to go for walks?" }
];

export { activeNotifications, passiveNotifications };