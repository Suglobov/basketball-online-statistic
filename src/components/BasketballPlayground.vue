<template>
    <svg
        id="BasketballPlayground"
        viewBox="0 0 2905 1605"
        width="2905"
        stroke="#000"
    >
        <g
            id="playground"
            style="transform: translate(6px, 16px);"
        >
            <rect
                id="outerLine"
                :x="-lineWidthCorrection"
                :y="-lineWidthCorrection"
                :width="playgroundWidth + lineWidthCorrection * 2"
                :height="playgroundHeight + lineWidthCorrection * 2"
                fill="none"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <line
                id="centerLine"
                :x1="playgroundWidth / 2"
                :y1="-centerlineProtrusion"
                :x2="playgroundWidth / 2"
                :y2="playgroundHeight + centerlineProtrusion"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <circle
                id="centerCircle"
                :cx="playgroundWidth / 2"
                :cy="playgroundHeight / 2"
                :r="centerCircleRadius - lineWidthCorrection"
                fill="none"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <rect
                id="colorZone-left"
                :x="-lineWidthCorrection"
                :y="playgroundHeight / 2 - colorZoneIndentFromCenterEndline + lineWidthCorrection"
                :width="freeThrowLineIndent"
                :height="colorZoneIndentFromCenterEndline * 2 - lineWidthCorrection * 2"
                :fill="colorZoneBackgroundColor"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <rect
                id="colorZone-right"
                :x="playgroundWidth - freeThrowLineIndent + lineWidthCorrection"
                :y="playgroundHeight / 2 - colorZoneIndentFromCenterEndline + lineWidthCorrection"
                :width="freeThrowLineIndent"
                :height="colorZoneIndentFromCenterEndline * 2 - lineWidthCorrection * 2"
                :fill="colorZoneBackgroundColor"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <path
                id="freeThrowZone-left"
                :d="`M${freeThrowLineIndent - lineWidthCorrection},
                      ${playgroundHeight / 2 - freeThrowLineWidth / 2}
                    A${centerCircleRadius - lineWidthCorrection},
                     ${centerCircleRadius - lineWidthCorrection}
                     0 0 1
                     ${freeThrowLineIndent - lineWidthCorrection},
                     ${playgroundHeight / 2 + freeThrowLineWidth / 2} Z`"
                fill="none"
                :stroke="freeThrowLineColor"
                :stroke-width="lineWidth"
            />
            <path
                id="freeThrowZone-right"
                :d="`M${playgroundWidth - (freeThrowLineIndent - lineWidthCorrection)},
                      ${playgroundHeight / 2 - freeThrowLineWidth / 2}
                    A${centerCircleRadius - lineWidthCorrection},
                     ${centerCircleRadius - lineWidthCorrection}
                     0 0 0
                     ${playgroundWidth - (freeThrowLineIndent - lineWidthCorrection)},
                     ${playgroundHeight / 2 + freeThrowLineWidth / 2} Z`"
                fill="none"
                :stroke="freeThrowLineColor"
                :stroke-width="lineWidth"
            />
            <circle
                id="basket-left"
                :cx="basketCenterIndent"
                :cy="playgroundHeight / 2"
                :r="basketRadius"
                fill="none"
                :stroke="lineBaseColor"
            />
            <circle
                id="basket-right"
                :cx="playgroundWidth - basketCenterIndent"
                :cy="playgroundHeight / 2"
                :r="basketRadius"
                fill="none"
                :stroke="lineBaseColor"
            />
            <path
                id="threePointLine-left"
                :d="`M0,${threePointLineIndent + lineWidthCorrection}
                        h${threePointLineStraightLength}
                    A${threePointLineRadius - lineWidthCorrection},
                     ${threePointLineRadius - lineWidthCorrection}
                     0 0 1
                     ${threePointLineStraightLength},
                     ${playgroundHeight - (threePointLineIndent + lineWidthCorrection)}
                    h-${threePointLineStraightLength}`"
                fill="none"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <path
                id="threePointLine-right"
                :d="`M${playgroundWidth},
                      ${threePointLineIndent + lineWidthCorrection}
                      h-${threePointLineStraightLength}
                    A${threePointLineRadius - lineWidthCorrection},
                     ${threePointLineRadius - lineWidthCorrection}
                     0 0 0
                     ${playgroundWidth - threePointLineStraightLength},
                     ${playgroundHeight - (threePointLineIndent + lineWidthCorrection)}
                    h${threePointLineStraightLength}`"
                fill="none"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <!-- <path
                id="threePointLine-left"
                :d="`M0,${threePointLineIndent + lineWidthCorrection}
                h300 C500,${threePointLineIndent + lineWidthCorrection}
                500,${playgroundHeight - (threePointLineIndent + lineWidthCorrection)}
                300,${playgroundHeight - (threePointLineIndent + lineWidthCorrection)} h-300`"
                fill="none"
                :stroke="'#c0c'"
                :stroke-width="lineWidth"
            /> -->
            <!-- <path
                :d="`M${basketCenterIndent},${playgroundHeight / 2}
                    m -${threePointLineRadius - lineWidthCorrection},0
                    a ${threePointLineRadius - lineWidthCorrection},
                      ${threePointLineRadius - lineWidthCorrection}
                      0 1,1 ${(threePointLineRadius - lineWidthCorrection) * 2},0
                    a ${threePointLineRadius - lineWidthCorrection},
                      ${threePointLineRadius - lineWidthCorrection}
                    0 1,1 -${(threePointLineRadius - lineWidthCorrection) * 2},0`"
                fill="none"
                :stroke="'#c0c'"
                :stroke-width="lineWidth"
            /> -->
            <!-- <path
                d="M570 580c10 240 350 240 360 0"
                fill="none"
                :stroke="lineBaseColor"
                :stroke-width="lineWidth"
            />
            <path
                d="M660 120h180m-90 0v15M90 0v300M1410 0v300"
                fill="none"
                stroke="#000"
            />
            <path
                d="M505 0v580h490V0"
                fill="none"
                stroke="#000"
            /> -->
        </g>
    </svg>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    /*
        https://russiabasket.ru/Files/Documents/%D0%9E%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB%D0%B0%202020.pdf
        Официальные Правила Баскетбола 2020
        Утверждены Центральным Бюро ФИБА
        Мис, Швейцария, 27 марта 2020 г. Действуют с 1 октября 2020 г.
    */
    setup() {
        const playgroundWidth = 2800;
        const playgroundHeight = 1500;
        const lineWidth = 5;
        // stroke growing from line center
        const lineWidthCorrection = lineWidth / 2;
        const centerlineProtrusion = 15;
        const centerCircleRadius = 180;
        const colorZoneIndentFromCenterEndline = 245;
        const freeThrowLineWidth = 360;
        const freeThrowLineIndent = 580;
        const basketCenterIndent = 157.5;
        const basketRadius = 30;
        const threePointLineRadius = 675;
        const threePointLineIndent = 90;
        const threePointLineStraightLength = 299;

        return {
            playgroundWidth,
            playgroundHeight,
            lineWidth,
            lineWidthCorrection,
            centerlineProtrusion,
            centerCircleRadius,
            colorZoneIndentFromCenterEndline,
            freeThrowLineWidth,
            freeThrowLineIndent,
            basketCenterIndent,
            basketRadius,
            threePointLineRadius,
            threePointLineIndent,
            threePointLineStraightLength,
            colorZoneBackgroundColor: '#eee',
            lineBaseColor: '#000',
            freeThrowLineColor: '#cc0',
        };
    },
});
</script>

<style>

</style>
