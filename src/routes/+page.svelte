<script>
    import CircleProgress from "$lib/components/CircleProgress.svelte";
    import ModelPaper from "$lib/components/ModelPaper.svelte";
    import {circlePercentage} from "./state.svelte.js";
    import {onMount} from "svelte";

    let {data} = $props();

    circlePercentage.value = data.donePercentage;
</script>

<div class="flex flex-col justify-center items-center py-10 lg:px-10 px-5">
    <div class="flex lg:flex-row flex-col lg:bg-base-200 rounded-xl py-10 w-full gap-20 justify-center items-start">
        <div class="lg:w-1/2 w-full flex justify-center items-center">
            <div class="relative">
                <CircleProgress value="base"/>
                <CircleProgress value={circlePercentage.value}/>
            </div>
        </div>
        <div class="lg:w-1/2 flex justify-start items-start">
            <ul class="list">

                <li class="p-4 pb-2 text-lg opacity-60 tracking-wide"><span class="opacity-100">🎉&nbsp;</span>
                    Recently Completed
                </li>

                {#each data.doneChapters.slice(0, 3) as doneChapter}
                    <li class="list-row text-xl">
                        <div>
                            <div>{doneChapter.subject}</div>
                            <div class="text-xs uppercase font-semibold opacity-60">{doneChapter.chapter}</div>
                        </div>
                    </li>
                {/each}

                <a class="btn btn-secondary m-4" href="/subjects">View All</a>

            </ul>
        </div>
    </div>

</div>

<!--    model papers-->
<div class="px-10">
    <h1 class="text-3xl font-bold">Model Papers</h1>
    <ModelPaper/>
</div>

<!--footer -->
<div class="lg:h-20 h-40"></div>
