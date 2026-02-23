/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    testArea: {
        type: OptionType.STRING,
        description: "Type here to test the sound settings!",
        default: "Hello, Animalese!",
        restartNeeded: false,
    },
    enableSounds: {
        type: OptionType.BOOLEAN,
        description: "Enable typing sounds",
        default: true,
        restartNeeded: false,
    },
    soundVolume: {
        type: OptionType.SLIDER,
        description: "Volume of the Animalese sounds",
        markers: [0, 25, 50, 75, 100],
        default: 100,
        stickToMarkers: false,
    },
    voiceType: {
        type: OptionType.SELECT,
        description: "Type of Animalese voice",
        options: [
            { label: "Male", value: "male", default: true },
            { label: "Female", value: "female" }
        ]
    },
    pitchShift: {
        type: OptionType.SLIDER,
        description: "Pitch shift for the Animalese sounds",
        markers: [-12, -6, 0, 6, 12],
        default: 0,
        stickToMarkers: false,
    },
    intonation: {
        type: OptionType.SLIDER,
        description: "Intonation level for the Animalese sounds",
        markers: [-0.5, -0.4, -0.3, -0.2, -0.1, 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        default: 0.0,
        stickToMarkers: true,
    },
    pitchVariation: {
        type: OptionType.SLIDER,
        description: "Intonation level for the Animalese sounds",
        markers: [0, 100],
        default: 20,
        stickToMarkers: false,
    },
    developerHelp: {
        type: OptionType.BOOLEAN,
        description: "Enable developer tools for debugging",
        default: false,
        restartNeeded: false,
    }
});
