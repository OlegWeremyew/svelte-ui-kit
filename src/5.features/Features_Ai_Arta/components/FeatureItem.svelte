<script>
    import { t } from "@/utils";
    export let text = "";
</script>

<li class="features__item feature">
    <span>{@html t(text)}</span>
</li>

<style lang="scss">
    .features__item {
        position: relative;
        width: 100%;
        height: auto;
        font-weight: 400;
        font-family: "Roboto-Medium", sans-serif;
        text-align: start;
        padding-left: 2.4rem;
        &:not(:last-child) {
            margin-bottom: 1.3rem;
        }

        span {
            strong {
                font-weight: 600;
            }
        }
    }

    .feature:before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.2rem;
        width: 1.2rem;
        height: 1.2rem;
        background: url(@/images/features/eggs.png) top / contain no-repeat;
    }
    .feature:last-child span {
        display: inline-block;
        padding-right: 1rem;
        position: relative;
        z-index: 99;
    }
    .feature:last-child span:after {
        z-index: -1;
        position: absolute;
        content: "";
        display: block;
        width: 117%;
        height: 2.2rem;
        top: 0;
        right: 0;
        border-radius: 0.8rem;
        background: linear-gradient(
            to bottom,
            rgb(205, 11, 199),
            rgb(114, 14, 217)
        );
        transform: translateY(-10%);
    }

    .feature:last-child {
        font-weight: 700;
    }
    .feature:last-child::before {
        display: none;
    }
    .feature:last-child span::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -2.2rem;
        width: 1.2rem;
        height: 1.2rem;
        background: url(@/images/features/eggs.png) top / contain no-repeat;
        transform: translateY(15%);
    }
</style>
