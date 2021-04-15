import * as config from "./config";
import scaleworldThumbnailUrl from "./assets/images/scaleworld-thumbnail.png";
import shibafetchThumbnailUrl from "./assets/images/shibafetch-thumbnail.png";

export interface TileDefinition {
  name: string;
  title: string;
  description: string | string[];
  url?: string;
  color: string;
  backgroundImageUrl?: string;
}

const definitions: TileDefinition[] = [
  {
    name: "twitter",
    title: "Twitter",
    description: "@HiPeanutBuddha",
    url: config.TWITTER_URL,
    color: "rgb(29, 161, 242)",
  },
  {
    name: "discord",
    title: "Discord",
    description: config.DISCORD_USERNAME,
    color: "rgb(114, 137, 218)",
  },
  {
    name: "vrchat",
    title: "VRChat",
    description: config.VRCHAT_USERNAME,
    url: config.VRCHAT_URL,
    color: "rgb(22 108 205)",
  },
  {
    name: "vrcarena",
    title: "VRCArena",
    description: "Find avatars and accessories for VRChat",
    url: config.VRCARENA,
    color: "rgb(110, 74, 158)",
  },
  {
    name: "vrcphotobuddy",
    title: "VR Photo Buddy",
    description: "Automatically upload photos from VR games",
    url: config.VRPHOTOBUDDY,
    color: "rgb(0, 7, 45)",
  },
  {
    name: "vrchat-world-shibafetch",
    title: "VRChat World",
    description: "Shiba Fetch",
    url: config.VRCHAT_WORLD_SHIBAFETCH_URL,
    color: "rgb(22 108 205)",
    backgroundImageUrl: shibafetchThumbnailUrl,
  },
  {
    name: "vrchat-world-scaleworld",
    title: "VRChat World",
    description: "Scale World",
    url: config.VRCHAT_WORLD_SCALEWORLD_URL,
    color: "rgb(22 108 205)",
    backgroundImageUrl: scaleworldThumbnailUrl,
  },
];

export default definitions;
