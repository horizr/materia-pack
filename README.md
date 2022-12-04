![horizr ❯ materia](./banner.png)

# horizr ❯ materia
> Technology and automation, including Create. Based on [horizr ❯ visum](https://github.com/horizr/visum-pack).

[**📄 Included mods**](./docs/mods.md)

## Installation
We recommend using the [Prism launcher](https://prismlauncher.org/) for playing the pack.

While creating a new instance, you can select the pack after searching for it in the _Modrinth_ tab.

### Server
We recommend using [docker-minecraft-server](https://github.com/itzg/docker-minecraft-server#running-a-server-with-a-packwiz-modpack).

The packwiz pack is available at `https://materia.horizr.xyz/pack.toml`.

### Additional recommendations
- [`Complementary Shaders`](https://www.curseforge.com/minecraft/customization/complementary-shaders) — highly-configurable shader-pack

## Notable changes
- Clicking an item frame with an amethyst shard makes it invisible
- Witches drop Luck potions
- Snow accumulates in cold biomes
- A crafting table can be used from the inventory
- Crops can’t be trampled
- Bats can be caught in buckets and let nearby entities glow for 20s when they are released
- Enchantment books and potions are stackable (16)
- Spyglass zooming can be adjusted by scrolling and there is a keybind for using it

## Development
[horizr CLI](https://github.com/horizr/cli) is used for pack management.

### Not from Modrinth
These must be manually updated:
- [`Better Leaves` (resource-pack)](https://github.com/TeamMidnightDust/BetterLeavesPack) v7.1
- [`Towers of the Wild: Reworked` (data-pack)](https://www.curseforge.com/minecraft/texture-packs/towers-of-the-wild-reworked-datapack) v4.0.2+fabric-waystones
- [`TerraBlender`](https://www.curseforge.com/minecraft/mc-mods/terrablender-fabric) v2.0.1.130
- [`Create Crafts & Additions`](https://www.curseforge.com/minecraft/mc-mods/createaddition) v20221128a

### Interoperability entry-points
When new items/blocks/entities/structures are added, the configuration files of the following mods should be adjusted (if necessary).

- Charm: replantable crops, bookcase items, structures on maps
- WTHIT: blacklisted blocks and entities
- Falling Leaves: leaves blocks

### Reconfiguration needed
*None*