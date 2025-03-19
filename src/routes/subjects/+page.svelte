<script>
    let {data} = $props();
</script>

<main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Your Chapters</h1>

    <div class="flex flex-col gap-4 justify-center items-center">
        {#each data.chapters as {subject, chapter, status}, index}
            <div class="rounded-xl">
                <h2 class="text-xl font-semibold">Chp {index + 1}: {chapter}</h2>
                <p class="mt-1 font-medium">
                    Status:
                    <strong class="{status === 'Done' ? 'text-green-500' : 'text-red-500'}">
                        {status}
                    </strong>
                </p>
            </div>
        {:else}
            <p class="text-gray-500">No chapters available!</p>
        {/each}
    </div>
</main>
