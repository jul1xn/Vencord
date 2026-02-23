/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";
import { playAudio } from "./audio";
import { settings } from "./settings";

export default definePlugin({
    name: "Animalese Typing",
    description: "Plays Animal Crossing sounds whenever you type!",
    authors: [{ name: "Juulcy", id: 1193932166992773121n }],
    settings,
    patches: [],
    start() {
        console.log(`[${this.name}] [Log] Loading plugin...`);
        document.addEventListener("keydown", (e) => {
            if (settings.store.enableSounds) {
                if (settings.store.developerHelp) {
                    console.log(`[${this.name}] [Dev] Playing sound for key: ${e.key}`);
                }

                try {
                    playAudio(e.key, settings.store.voiceType);
                }
                catch (error) {
                    console.error(`[${this.name}] [Error] Failed to play sound for key: ${e.key}`, error);
                }
            }
        });

        console.log(`[${this.name}] [Log] Plugin loaded!`);
    }
});
