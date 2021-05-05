const mongoose = require('mongoose');
const Blog = require('./models/blog');


const blogs = [
    {
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        author: "Lokesh",
        desc:"What is nature? There is a great deal of talk and endeavour to protect nature, the animals, the birds, the whales and dolphins, to clean the polluted rivers, lakes, fields and so on. Nature is not put together by thought, as religion and belief are. Nature is the tiger, that extraordinary animal with its energy, its great sense of power. Nature is the solitary tree in the field, the meadows and the grove; it is that squirrel shyly hiding behind a bough. Nature is the ant, the bee and all the living things of the earth. Nature is the river, not a particular river, whether the Ganga, the Thames or the Mississippi. Nature is those mountains, snow-clad, with dark blue valleys and range of hills meeting the sea. The universe is part of nature. One must have a feeling for all this, not destroy it, not kill for one’s pleasure or one’s table. We do kill cabbages, the vegetables we eat, but one must draw the line somewhere. If you do not eat vegetables, how will you live? So one must intelligently discern."
    },
    {
        img: "https://images.unsplash.com/photo-1444930694458-01babf71870c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80",
        author: "Rahul",
        desc:"Flowers like the Rose, the Jasmine, the Bela, and the Rajanigandha are very sweet smelling. While they are in bloom, they scatter their fragrance around and act as a healing balm to all bruised hearts. Some common flowers like the Lotus, the marigold, the sunflowers, etc. are really beautiful to look at. A thing of beauty is a joy forever. Flowers are, therefore, a perennial source of joy to men. They are not only things of beauty but also useful for the supply of honey which is both food and medicine. Bees gather honey from flowers and store it up in their hives from which men get honey."
    },
    {
        img: "https://images.unsplash.com/photo-1542318099375-c20b8c991bbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        author:"Sir J. Hussen",
        desc:"Traffic jam is such kind of situation where a lot of vehicles crowd so close together that movement becomes impossible for some time. It is a common affair in the big cities and towns. Nowadays it is one of the major problems in our country. The causes of traffic jams are the rapid growth of the population, increasing the number of vehicles and narrow roads. Traffic jam is a great problem and it kills our valuable time. Our works are also badly hampered by a traffic jam. A traffic jam can be solved by well planned spacious roads, strict traffic rules and by sufficient traffic police. After taking all these steps, we may hope to have a good traffic system for easy and comfortable movement."
    },
    {
        img: "https://images.unsplash.com/photo-1558224421-39041b70c493?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1959&q=80",
        author:"Youman",
        desc:"Winter has finally arrived, no more messing with the 6″ of snow fall here & there, Bulgaria is now frozen. We have our normal for this time of year, temps of -18c & that is in the morning not just in the middle of the night, & the snow is frozen but still soft, its going nowhere soon!  Some areas have been very hard hit with the lowest temp this year being -31.4c, roads were closed & lorries halted from travelling as we were hit with blizzards, but now we have settled down to normality. The normality where the main things to consider are do we have enough wood for the fires, do we have enough food for the next two weeks or so, milk, gas & dog/cat food being our main worries. We can answer yes for the next two or three weeks but I would feel better if it was just 2 weeks. There are bills that still need to be paid before the cut of date afterall."
    },
    
]

const seedDB = async ()=>{
    
    await Blog.insertMany(blogs);
    console.log("DB Seeded");
}

module.exports = seedDB;