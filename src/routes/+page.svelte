<script>
    import CircleProgress from "$lib/components/CircleProgress.svelte";
    import TasksDueWeek from "$lib/components/TasksDueWeek.svelte";
    import ModelPaper from "$lib/components/ModelPaper.svelte";

    let circleValue = $state(69);
</script>

<div class="flex flex-col justify-center items-center py-10 lg:px-10 px-5">
    <div class="flex lg:flex-row flex-col lg:bg-base-200 rounded-xl py-10 w-full gap-20 justify-center items-start">
        <div class="lg:w-1/2 w-full flex justify-center items-center">
            <div class="relative">
                <CircleProgress value="base"/>
                <CircleProgress value={circleValue}/>
            </div>
        </div>
        <div class="lg:w-1/2 flex justify-start items-start">
            <TasksDueWeek/>
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