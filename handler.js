const Minecraft = require('./data/index.json');

const randomMinecraft = () => {
  return Minecraft[Math.floor(Math.random() * Minecraft.length)];
}

const randomMC = (MinecraftArray, n) => {
  const limit = MinecraftArray.length < n ? MinecraftArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * MinecraftArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return MinecraftArray[randomIndex];
  });
};


module.exports = { randomMinecraft };