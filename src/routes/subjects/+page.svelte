<script>
    import {enhance} from "$app/forms";
    import {Confetti} from "svelte-confetti";

    let {data} = $props();
    let chapters = $state(data.chapters);

    let selectedSubject = $state();
    if (data.user.core === "medical") selectedSubject = "Biology";
    if (data.user.core === "engineering" || data.user.core === "ICS") selectedSubject = "Maths";

    let showConfetti = $state(false);

    function filter() {
        chapters = data.chapters.filter((chapter) => chapter.subject === selectedSubject);
    }

    filter();

    function setupForm(form) {
        enhance(form, ({data}) => {
            console.log("Server response:", data);
        });
    }

    function submitForm(event) {
        const form = event.target.closest("form");
        if (form) form.submit();
    }

    function handleStatusChange(event) {
        submitForm(event);

        // Trigger confetti if "Done" is selected
        if (event.target.value === "Done") {
            showConfetti = true;
            setTimeout(() => (showConfetti = false), 3000); // Confetti lasts for 3 seconds
        }
    }
</script>

<main class="flex flex-col gap-6 p-10">
    <h1 class="text-2xl font-bold">Choose Subject</h1>

    <!-- Dropdown for subjects -->
    {#if data.user.core === "medical"}
        <select class="select" bind:value={selectedSubject} onchange={filter}>
            <option value="Biology">Biology</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
        </select>
    {:else if data.user.core === "engineering"}
        <select class="select" bind:value={selectedSubject} onchange={filter}>
            <option value="Maths">Maths</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
        </select>
    {:else if data.user.core === "ICS"}
        <select class="select" bind:value={selectedSubject} onchange={filter}>
            <option value="Maths">Maths</option>
            <option value="Physics">Physics</option>
            <option value="Computer">Computer</option>
        </select>
    {/if}

    <div class="flex flex-wrap justify-start items-center gap-5">
        {#each chapters as {id, subject, chapter, status}, index}
            <div class="card bg-base-200 border-1 border-accent w-96 card-md shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">Chp {index + 1}</h2>
                    <p>{chapter}</p>
                    <div class="justify-end card-actions">
                        <form use:setupForm method="post" action="?/updateStatus" use:enhance>
                            <input type="hidden" name="chapterId" value={id}/>
                            <select
                                    class="select max-w-40 mt-3"
                                    name="status"
                                    onchange={handleStatusChange}
                            >
                                <option value="Not Done" selected={status === "Not Done"}>Not Done ❌</option>
                                <option value="Done Before" selected={status === "Done Before"}>Done Before ✅</option>
                                <option value="Done" selected={status === "Done"}>Done 🎉</option>
                            </select>
                            <!-- Confetti -->
                        </form>
                    </div>
                </div>
            </div>
        {:else}
            <p class="opacity-70">No chapters available!</p>
        {/each}
    </div>
</main>
{#if showConfetti}
    <div class="absolute right-20 top-1/2 w-100">
        <Confetti amount="100"/>
    </div>
{/if}
