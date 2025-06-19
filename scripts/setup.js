const fs = require("fs")
const path = require("path")

console.log("🚀 Setting up MERN Portfolio Project...\n")

// Create directory structure
const directories = [
  "server",
  "server/models",
  "server/routes",
  "server/middleware",
  "client",
  "client/src",
  "client/src/components",
  "client/src/store",
  "client/src/store/slices",
  "client/public",
]

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log(`✅ Created directory: ${dir}`)
  }
})

// Installation instructions
console.log("\n📋 Setup Instructions:")
console.log("1. Install dependencies:")
console.log("   npm run install-all")
console.log("\n2. Set up environment variables:")
console.log("   - Copy server/.env.example to server/.env")
console.log("   - Update MongoDB connection string")
console.log("\n3. Start development servers:")
console.log("   npm run dev")
console.log("\n4. Open browser:")
console.log("   Frontend: http://localhost:3000")
console.log("   Backend: http://localhost:5000")

console.log("\n🎉 MERN Portfolio setup complete!")
console.log("\nTechnologies used:")
console.log("- React.js (Frontend)")
console.log("- Redux (State Management)")
console.log("- Node.js (Runtime)")
console.log("- Express.js (Backend Framework)")
console.log("- MongoDB (Database)")
