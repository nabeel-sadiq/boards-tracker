<script>
    const pfp = "https://beebom.com/wp-content/uploads/2025/01/jinwoo-solo-leveling.jpg"

    let {data} = $props();
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
            <div class="flex justify-between items-center gap-3 p-3 w-60">
                <p>Theme:</p>
                <label class="flex cursor-pointer gap-2">
                    <span class="label-text">
                        <i class="fa-solid fa-moon"></i>
                    </span>
                    <input type="checkbox" value="light" class="toggle theme-controller"/>
                    <span class="label-text">
                        <i class="fa-solid fa-sun"></i>
                    </span>
                </label>
            </div>
            <div class="divider h-1"></div>
            <form class="flex flex-col gap-4" method="post">
                <select class="w-60 p-3">
                    <option selected={data.user.core == "medical"}>Pre-Medical</option>
                    <option selected={data.user.core == "engineering"}>Pre-Engineering</option>
                    <option selected={data.user.core == "ICS"}>ICS - Physics</option>
                </select>
                    <button class="btn btn-success" type="submit">Save</button>
            </form>
            <div class="divider h-1"></div>
            <div class="flex justify-between items-center gap-2">
                <form action="/logout" method="post">
                    <button type="submit" class="btn btn-error"><i class="fa-solid fa-right-from-bracket"></i>Logout
                    </button>
                </form>
                <button class="btn btn-error"><i class="fa-solid fa-trash"></i>Delete Account</button>
            </div>
        </div>

    </div>

    <div class="flex justify-center items-center lg:w-2/3">
        <div class="flex flex-col justify-center lg:mt-0 mt-20 items-start lg:min-h-screen gap-4">
            <h1 class="lg:text-3xl text-2xl font-bold">Subjects Progression 📈</h1>
            <!-- Maths Section -->
            <div class="flex justify-center items-center gap-3 text-xl">
                <p>Maths</p>
                <progress class="progress progress-primary lg:w-100 w-50 h-3" value="90" max="100"></progress>
            </div>

            <!-- Urdu Section -->
            <div class="flex justify-center items-center gap-3 text-xl">
                <p>Urdu</p>
                <progress class="progress progress-primary lg:w-100 w-50 h-3" value="80" max="100"></progress>
            </div>

            <!-- English Section -->
            <div class="flex justify-center items-center gap-3 text-xl">
                <p>English</p>
                <progress class="progress progress-primary lg:w-100 w-50 h-3" value="95" max="100"></progress>
            </div>

            <!-- Islamiyat Section -->
            <div class="flex justify-center items-center gap-3 text-xl">
                <p>Islamiyat</p>
                <progress class="progress progress-primary lg:w-100 w-50 h-3" value="69.69" max="100"></progress>
            </div>

            <!-- Physics Section -->
            <div class="flex justify-center items-center gap-3 text-xl">
                <p>Physics</p>
                <progress class="progress progress-primary lg:w-100 w-50 h-3" value="75" max="100"></progress>
            </div>

            <!-- Computer Science Section -->
            <div class="flex justify-center items-center gap-3 text-xl">
                <p>Computer</p>
                <progress class="progress progress-primary lg:w-100 w-50 h-3" value="90" max="100"></progress>
            </div>
        </div>
    </div>
</div>

<!--footer -->
<div class="lg:h-20 lg:hidden flex h-40"></div>