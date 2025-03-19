<script>
    // import {circlePercentage} from "../state.svelte.js";

    let pfp = $state("https://beebom.com/wp-content/uploads/2025/01/Sung-Jinwoo-when-he-was-an-E-Rank.jpg?w=1024&quality=75");
    let rank = $state("E");

    let circlePercentage = {
        value: 99,
    }

    if (circlePercentage.value < 20) {
        rank = "E";
        pfp = "https://beebom.com/wp-content/uploads/2025/01/Sung-Jinwoo-when-he-was-an-E-Rank.jpg?w=1024&quality=75"
    } else if (circlePercentage.value < 40) {
        rank = "D";
        pfp = "https://avatarfiles.alphacoders.com/375/thumb-1920-375666.jpeg"
    } else if (circlePercentage.value < 60) {
        rank = "C";
        pfp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfrEjrPY_TnMlfgNLg0-J8t5fb5Dnq4Ytug&s"
    } else if (circlePercentage.value < 80) {
        rank = "B";
        pfp = "https://beebom.com/wp-content/uploads/2025/01/jinwoo-solo-leveling.jpg?w=1250&quality=75"
    } else if (circlePercentage.value <= 90) {
        rank = "A";
        pfp = "https://staticg.sportskeeda.com/editor/2024/01/a0d04-17063341419867-1920.jpg"
    } else if (circlePercentage.value < 99) {
        rank = "S";
        pfp = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/01/jinwoo-sits-on-throne-solo-leveling-season-2-arise-from-the-shadow-ed.jpg"
    } else {
        rank = "Jinha";
        pfp = "https://cdn.rafled.com/anime-icons/images/TcX4zEbyGJiwUzSSYHq4yJRtlg0dda5Y.jpg"
    }

    let {data} = $props();
    let modal = $state();
</script>

<div class="flex lg:flex-row flex-col justify-center items-center lg:px-0 px-5 lg:py-0 py-20">
    <div class="lg:w-1/3 flex flex-col justify-center items-center lg:min-h-screen gap-4">
        <div class="avatar avatar-online">
            <div class="w-40 rounded-full">
                <img src={pfp} alt="profile"/>
            </div>
        </div>

        <h1 class="text-xl opacity-70">@{data.user.name}</h1>
        <h1 class="text-3xl"><span class="text-accent font-bold">🗡️ {rank}</span> - Rank</h1>

        <div id="settings" class="flex flex-col justify-center items-center gap-3 py-3">
            <div class="divider h-1"></div>
            <form action="?/updateCore" class="flex flex-col gap-4" method="post">
                <select class="w-60 p-3" name="core">
                    <option value="medical" selected={data.user.core === "medical"}>Pre-Medical</option>
                    <option value="engineering" selected={data.user.core === "engineering"}>Pre-Engineering</option>
                    <option value="ICS" selected={data.user.core === "ICS"}>ICS - Physics</option>
                </select>
                <button class="btn btn-success" type="submit">Save</button>
            </form>
            <div class="divider h-1"></div>
            <div class="flex justify-between items-center gap-2">
                <form action="/logout" method="post">
                    <button type="submit" class="btn btn-error"><i class="fa-solid fa-right-from-bracket"></i>Logout
                    </button>
                </form>

                <button onclick={() => {modal.showModal()}} class="btn btn-error"><i class="fa-solid fa-trash"></i>Delete
                    Account
                </button>
                <dialog bind:this={modal} id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <h3 class="text-lg font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Danger Zone</h3>
                        <p class="py-4">Are you sure you want to delete your account?<br>All data will be lost and
                            cannot be recovered.</p>
                        <div class="modal-action">
                            <form action="?/deleteUser" method="post">
                                <button type="submit" class="btn btn-error"><i class="fa-solid fa-trash"></i> Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    </div>
</div>

<!--footer -->
<div class="lg:h-20 lg:hidden flex h-40"></div>