![horizr ❯ materia](./banner.png)

# horizr ❯ materia
> Technology and automation, including Create. Based on [horizr ❯ visum](https://github.com/horizr/visum-pack).

[**📄 Included mods**](./docs/mods.md)

## Installation
We recommend using the [PolyMC launcher](https://polymc.org/) for playing the pack.

While creating a new instance, you can select the pack after searching for it in the _Modrinth_ tab.

### Additional recommendations
- [`Terralith`](https://www.planetminecraft.com/data-pack/terralith-overworld-evolved-100-biomes-caves-and-more/) — Datapack adding many new biomes
- [`Complementary Shaders`](https://www.curseforge.com/minecraft/customization/complementary-shaders) — Highly-configurable shader-pack

## Notable changes
- Click an item frame with an amethyst shard to make it invisible
- Witches drop Luck potions
- Snow accumulates in cold biomes
- A crafting table can be used from the inventory
- Crops can't be trampled
- Bats can be caught in buckets and let nearby entities glow for 20s when they are released
- Enchantment books and potions are stackable (16)

## Development
[horizr CLI](https://github.com/horizr/cli) is used for pack management.

### Not from Modrinth
These must be manually updated:
- [`Better Leaves` (resource-pack)](https://github.com/TeamMidnightDust/BetterLeavesPack) v6.2

### Interoperability entry-points
When new items/blocks/entities/structures are added, the configuration files of the following mods should be adjusted (if necessary).

- Charm: replantable crops, Bookcase items, structures on maps
- WTHIT: blacklisted blocks and entities
