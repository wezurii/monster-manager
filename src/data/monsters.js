const monsters = [
  {
    "name": "Ashigaru",
    "type": "Minion",
    "conflicts": {
      "military": 2,
      "political": 1
    },
    "description": "Most armies consist of a small number of samurai who form elite units and the command cadre. They are backed by a large number of ashigaru: levied or even career soldiers who serve the Great Clans but are drawn from the lower classes.",
    "societal": {
      "honor": 25,
      "glory": 35,
      "status": 19,
      "demeanor": {
        "type": "Gruff",
        "bonus_type": "Air",
        "bonus_magnitude": 2,
        "bane_type": "Water",
        "bane_magnitude": -2
      }
    },
    "personal": {
      "endurance": 6,
      "composure": 5,
      "focus": 3,
      "vigilance": 2
    },
    "rings": {
      "earth": 3,
      "air": 1,
      "fire": 2,
      "water": 2,
      "void": 1
    },
    "skills": {
      "artisan": "0",
      "martial": 1,
      "scholar": "0",
      "social": 1,
      "trade": 1
    },
    "weapons": [
      {
        "name": "Yari",
        "range": 2,
        "damage": 5,
        "qualities": "Wargear"
      }
    ],
    "armor": {
      "name": "Ashigaru armor",
      "resistance": 3,
      "qualities": "Wargear"
    },
    "gear": "Peasant's garb, helmet, a handful of zeni and bu",
    "abilities": [
      {
        "name": "Rank Tactics",
        "desc": "When an ashigaru provides assistance to the Martial skill check of another character at range 0-2, that character adds one kept skill die showing a Success result instead of rolling an additional die."
      }
    ],
    "species": "Human",
    "book": "Beginner Game",
    "page": 43,
    "tag": "peasant"
  },
  {
    "name": "Peasant",
    "type": "Minion",
    "conflicts": {
      "military": 1,
      "political": 1
    },
    "description": "Most of Rokugan's inhabitants are peasants. These hard-working people live their lives largely beneath the notice of samurai and yet without their toil, society would not exist.",
    "societal": {
      "honor": 20,
      "glory": 30,
      "status": 10,
      "demeanor": {
        "type": "Shrewd",
        "bonus_type": "Water",
        "bonus_magnitude": 2,
        "bane_type": "Fire",
        "bane_magnitude": -2
      }
    },
    "personal": {
      "endurance": 6,
      "composure": 12,
      "focus": 6,
      "vigilance": 2
    },
    "rings": {
      "earth": 2,
      "air": 1,
      "fire": 1,
      "water": 2,
      "void": 1
    },
    "skills": {
      "artisan": "0,",
      "martial": "0,",
      "scholar": "0,",
      "social": 1,
      "trade": 1
    },
    "weapons": [
      {
        "name": "Fists",
        "range": "0,",
        "damage": 1,
        "qualities": "Natural"
      }
    ],
    "armor": {
      "name": "None",
      "resistance": "0",
      "qualities": ""
    },
    "gear": "Rags, cloth headband, shoddy farm equipment, a handful of zeni",
    "abilities": [
      {
        "name": "Sworn Protector",
        "desc": "Once per round, when an Attack action check targetting another character at range 0-1 succeeds, the bushi may use this technique to spend 1 Void point to intervene. The bushi becomes the target of the attack instead of the original target."
      },
      {
        "name": "Striking as Fire",
        "desc": "When the bushi makes a Martial Arts [Melee, Ranged, or Unarmed] (Fire) check, they may spend opportunity to cause one target who would have suffered 1 or more fatigue to suffer a critical strike instead."
      }
    ],
    "species": "Human",
    "book": "Beginner Game",
    "page": 41,
    "tag": "peasant"
  },
  {
    "name": "Veteran Bushi",
    "type": "Adversary",
    "conflicts": {
      "military": 4,
      "political": 2
    },
    "description": "Samurai dedicated to warfare, bushi defend the interests of their clans and the Chrysanthemum Throne across Rokugan. Trained in precision and perseverance, armoed with the best equipment available, and honed in battle, an experienced bushi is a dangerous opponent even when outnumbered or caught off guard.",
    "societal": {
      "honor": 65,
      "glory": 60,
      "status": 39,
      "demeanor": {
        "type": "Assertive",
        "bonus_type": "Earth",
        "bonus_magnitude": 2,
        "bane_type": "Water",
        "bane_magnitude": -2
      }
    },
    "personal": {
      "endurance": 12,
      "composure": 9,
      "focus": 5,
      "vigilance": 3
    },
    "rings": {
      "earth": 3,
      "air": 2,
      "fire": 3,
      "water": 3,
      "void": 2
    },
    "skills": {
      "artisan": 1,
      "martial": 3,
      "scholar": 2,
      "social": "0,",
      "trade": 0
    },
    "weapons": [
      {
        "name": "Naginata",
        "range": 2,
        "damage": 6,
        "qualities": "Cumbersome, Wargear"
      },
      {
        "name": "Katana",
        "range": 1,
        "damage": 4,
        "qualities": "Ceremonial"
      }
    ],
    "armor": {
      "name": "Iacquered armor",
      "resistance": 4,
      "qualities": "Ceremonial"
    },
    "gear": "Daisho, plain robes (Mundane)",
    "abilities": [
      {
        "name": "Sworn Protector",
        "desc": "Once per round, when an Attack action check targetting another character at range 0-1 succeeds, the bushi may use this technique to spend 1 Void point to intervene. The bushi becomes the target of the attack instead of the original target."
      },
      {
        "name": "Striking as Fire",
        "desc": "When the bushi makes a Martial Arts [Melee, Ranged, or Unarmed] (Fire) check, they may spend opportunity to cause one target who would have suffered 1 or more fatigue to suffer a critical strike instead."
      }
    ],
    "species": "Human",
    "book": "Beginner Game",
    "page": 43,
    "tag": "samurai"
  }
];

export default monsters;

/*
  "License":
  "OPEN GAME LICENSE Version 1.0a",
  "The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc (\"Wizards\"). All Rights Reserved.",
  "1. Definitions: (a)\"Contributors\" means the copyright and/or trademark owners who have contributed Open Game Content; (b)\"Derivative Material\" means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) \"Distribute\" means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)\"Open Game Content\" means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) \"Product Identity\" means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) \"Trademark\" means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) \"Use\", \"Used\" or \"Using\" means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) \"You\" or \"Your\" means the licensee in terms of this agreement.",
  "2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.",
  "3.Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License.",
  "4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.",
  "5.Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.",
  "6.Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.",
  "7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.",
  "8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.",
  "9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.",
  "10 Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You Distribute.",
  "11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.",
  "12 Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.",
  "13 Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.",
  "14 Reformation: If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.",
  "15 COPYRIGHT NOTICE Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc."
*/
