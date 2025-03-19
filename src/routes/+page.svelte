<script>
    import CircleProgress from "$lib/components/CircleProgress.svelte";
    import ModelPaper from "$lib/components/ModelPaper.svelte";
    import {circlePercentage} from "./state.svelte.js";
    import {onMount} from "svelte";

    let {data} = $props();

    circlePercentage.value = data.donePercentage;
</script>

<div class="flex flex-col justify-center items-center py-10 lg:px-10 px-5 min-h-100">
    <div class="flex lg:flex-row justify-items-end flex-col gap-20 lg:bg-base-200 p-10 rounded-xl w-full items-center h-full">
        <div class="flex justify-center items-center lg:w-1/2">
            <div class="relative">
                <CircleProgress value="base"/>
                <CircleProgress value={circlePercentage.value}/>
            </div>
        </div>


        <div class="lg:w-1/2 flex justify-start items-start">
            <ul class="list">
                <li class="p-4 pb-2 text-lg opacity-60 tracking-wide">
                    <span class="opacity-100">🎉&nbsp;</span>
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

                {#if !data.doneChapters.length > 0}
                    <div class="text-xs font-semibold opacity-60 ml-4">No recently completed chapters.</div>
                {/if}

                <a class="btn btn-secondary m-4" href="/subjects">View All</a>
            </ul>
        </div>
    </div>
</div>

<!-- Model papers -->
<div class="px-10">
    <h1 class="text-3xl font-bold">Model Papers</h1>
    <ModelPaper/>
</div>

<!-- Footer -->
<div class="lg:h-20 h-40"></div>