<script>
    const pfp = "https://beebom.com/wp-content/uploads/2025/01/jinwoo-solo-leveling.jpg"

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
        <h1 class="text-3xl"><span class="text-accent font-bold">🗡️ S</span> - Rank</h1>

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
                        <p class="py-4">Are you sure you want to delete your account?<br>All data will be lost and cannot be recovered.</p>
                        <div class="modal-action">
                            <form action="?/deleteUser" method="post">
                                <button type="submit" class="btn btn-error"><i class="fa-solid fa-trash"></i> Delete</button>
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