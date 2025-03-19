<script>
    let props = $props();
</script>

{#if props.value == 0}
    <div class="radial-progress text-neutral absolute inset-0"
         style={`--value:100; --size:20rem; --thickness: 2rem;`}
         aria-valuenow="20"
         role="progressbar"
    >
        <div class="text-center text-base-content text-3xl">
            <p class="text-accent text-4xl">{props.value}%</p>
            <p>Completed</p>
        </div>
    </div>
{:else if props.value == "base"}
    <div class="radial-progress text-neutral absolute inset-0"
         style={`--value:100; --size:20rem; --thickness: 2rem;`}
         aria-valuenow="20"
         role="progressbar"
    >
    </div>
{:else}
    <div class="radial-progress text-primary"
         style={`--value:${props.value}; --size:20rem; --thickness: 2rem;`}
         aria-valuenow="20"
         role="progressbar"
    >
        <div class="text-center text-base-content text-3xl">
            <p class="text-accent text-4xl">{props.value}%</p>
            <p>Syllabus</p>
            <p>Completed</p>
        </div>
    </div>
{/if}