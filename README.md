![horizr ❯ materia](./banner.png)

# horizr ❯ materia
> Technology and automation, including Create. Based on [horizr ❯ visum](https://github.com/horizr/visum-pack).

[**📄 Included mods**](./docs/mods.md)

Additionally, the [`Better Leaves` resource-pack by MidnightDust](https://github.com/TeamMidnightDust/BetterLeavesPack) is preinstalled.

## Installation
We recommend using the [PolyMC launcher](https://polymc.org/) for playing the pack.

While creating a new instance, you can select the pack after searching for it in the _Modrinth_ tab.

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

The `Better Leaves` resource-pack must be updated manually.

### Interoperability entry-points
When new items/blocks/entities/structures are added, the configuration files of the following mods should be adjusted (if necessary).

- Charm: replantable crops, Bookcase items, structures on maps
- WTHIT: blacklisted blocks and entities
