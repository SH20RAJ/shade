const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
let posts;
async function seedData() {
  
    // Seed other models with relationships as needed
     posts = await prisma.post.createMany({
      data: [
        { content: "This is my first post!", authorId: '65f683f7b063397b94a2d231' },
        { content: "Another post!", authorId: '65f683f7b063397b94a2d231' },
      ],
    });
    // ...
  }
  try {
      seedData()
    .then(() => {
      console.log("Data seeding complete!");
      console.log(posts);
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error during seeding:", error);
      process.exit(1);
    });
  
  } catch (error) {
    console.log(error)
  }
  
