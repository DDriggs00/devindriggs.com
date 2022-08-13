---
id: 2
title: Voltorb Flip Calculator
description: An Android app to calculate the odds in the Voltorb Flip Pokemon minigame
tech: android java c++
logo: /images/voltorbflipcalc/VoltorbFlipCalculator_logo.png
github: https://github.com/DDriggs00/VoltorbFlipCalculator
twitter: DDriggs00
---

![Voltorb Flip Calculator](/images/voltorbflipcalc/VoltorbFlipCalculator_logo.png)

## About Voltorb Flip

Voltorb Flip is a minigame from the Pokémon HeartGold and SoulSilver games, and is one of the only minigames that is not entirely chance-based.

The game consists of a 5x5 grid of tiles, each containing a number from 0 (labeled as "Voltorb") to 3, with each row and column specifying the total of its values and the number of zeroes in that row. When a cell is flipped, your level score (which starts at 1) is multiplied by the value of the flipped cell. The Level is over once you have either flipped all cells greater than one or when you have lost by flipping a zero

## About the Calculator

This calculator is designed to take some of the guesswork out of the minigame by calculating the likelihood of each cell being a zero, and deducing from that which cell is the best option

It does this via a two step process. In the first step, certain rules are considered, which eliminate nearly all invalid options. In the second step, a brute-force calculation of all valid combinations is performed, and the result analyzed, allowing for exact percentages of rates of success for each cell to be calculated.

The calculator also includes a copy of the game that you can play to test new strategies.

[Codebase is available on GitHub](https://github.com/DDriggs00/VoltorbFlipCalculator)

## Screenshots

<table>
<tr>
<td><img src="/images/voltorbflipcalc/calculator-5050.png" alt="A 50% choice either way" /></td>
<td><img src="/images/voltorbflipcalc/calculator-prompt.png" alt="Revealing a new cell" /></td>
<td><img src="/images/voltorbflipcalc/calculator-solved.png" alt="A solved game" /></td>
</tr>
<tr>
<td><img src="/images/voltorbflipcalc/calculator-start.png" alt="The start of a new game" /></td>
<td><img src="/images/voltorbflipcalc/game-flagging.png" alt="Playtest mode - Flagging" /></td>
<td><img src="/images/voltorbflipcalc/game-advance.png" alt="Playtest mode - New Level" /></td>
</tr>
</table>
