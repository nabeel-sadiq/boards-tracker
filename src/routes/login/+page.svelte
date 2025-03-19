<script>
    let {form} = $props()
</script>


<div class="flex flex-col justify-center items-center min-h-screen px-5">
    <div class="bg-base-200 rounded-xl max-w-lg p-10 flex flex-col justify-center items-center gap-6">
        <h1 class="text-3xl font-bold">Login</h1>
        <form class="flex flex-col gap-3" action="?/login" method="POST">
            <div>
                <label class="input validator">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                           stroke="currentColor">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input type="text" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3"
                           maxlength="30" title="Only letters, numbers or dash" name="username"/>
                </label>
                <p class="validator-hint hidden py-3">
                    Must be 3 to 30 characters
                    <br/>containing only letters, numbers or dash
                </p>
            </div>

            <div>
                <label class="input validator">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                           stroke="currentColor">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input type="password" required placeholder="Password" minlength="5" name="password"/>
                </label>
            </div>

            {#if form?.invalid}
                <p class="error">Username and password is required.</p>
            {/if}

            {#if form?.credentials}
                <p class="error">You have entered the wrong credentials.</p>
            {/if}

            <button class="btn btn-accent mt-3" type="submit">Log in</button>
        </form>
        <div class="max-w-xs text-center px-2">
            <h1>Don't have an account? Create one <a href="/register" class="text-accent">here</a></h1>
        </div>
    </div>
</div>
