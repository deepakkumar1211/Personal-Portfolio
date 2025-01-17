import appFlowy from '../assets/images/OpenSrc/appflowy.png';
import flood from "../assets/images/OpenSrc/flood.png";
import mattermost from '../assets/images/OpenSrc/mattermost.jfif';
import openFoodFacts from '../assets/images/OpenSrc/openFoodFacts.png';

import {
    SiFlutter,
    SiPython, 
    SiReact,
    SiTypescript,
} from "react-icons/si";
import {TbBrandReactNative} from "react-icons/tb";

export const OPEN_SOURCE_CONTRIBUTIONS = [
  {
    id: "os-1",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title:'Make "Start Scanning" Button',
    link: "https://github.com/openfoodfacts/smooth-app/pull/3569",
    number: "#3569",
    date: "Jan 12 2023",
    linesAdded: "34",
    linesDeleted: "29",
    technology: SiFlutter,
  },
  {
    id: "os-25",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Create a screen listing all attributes for a product",
    link: "https://github.com/openfoodfacts/smooth-app/pull/4714",
    number: "#4714",
    date: "Nov 4 2023",
    linesAdded: "354",
    linesDeleted: "39",
    technology: SiReact,
  },
  {
    id: "os-26",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "open-prices",
    type: "pull-request",
    status: "merged",
    title: "feat: add endpoint to update price ",
    link: "https://github.com/openfoodfacts/open-prices/pull/202",
    number: "#202",
    date: "Feb 23 2024",
    linesAdded: "107",
    linesDeleted: "0",
    technology: SiPython,
  },
  {
    id: "os-101",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost-mobile",
    type: "pull-request",
    status: "merged",
    title: "fix: reset password bug",
    link: "https://github.com/mattermost/mattermost-mobile/pull/7135",
    number: "#7135",
    date: "Feb 16 2023",
    linesAdded: "3",
    linesDeleted: "4",
    technology: TbBrandReactNative,
  },
  {
    id: "os-102",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost-mobile",
    type: "pull-request",
    status: "merged",
    title: "Feat: add copy to clipboard button in \"about\" mattermost page",
    link: "https://github.com/mattermost/mattermost-mobile/pull/7134",
    number: "#7134",
    date: "Jul 26 2023",
    linesAdded: "73",
    linesDeleted: "37",
    technology: TbBrandReactNative,
  },
  {
    id: "os-104",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Migrate \"interactive_dialog.jsx\" and tests to Typescript",
    link: "https://github.com/mattermost/mattermost/pull/25026",
    number: "#25026",
    date: "Oct 28 2023",
    linesAdded: "88",
    linesDeleted: "56",
    technology: SiTypescript,
  },
];