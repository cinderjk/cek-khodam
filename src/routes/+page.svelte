<div class="">
    <section
        class="bg-[url('/kuburan.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply h-screen">
    {#if !isSubmit}
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
            <a href="#" class="flex items-center mb-6 text-2xl lg:text-4xl font-semibold text-white text-center">
                    CEK KHODAM ONLINE
            </a>
            <div class="w-full bg-[rgba(255,255,255,0.2)] rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800">
                <div class="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
                    <h1
                        class="text-lg font-bold leading-tight tracking-tight text-center text-white md:text-xl dark:text-white">
                        CEK KHODAM YANG SELALU MENEMANIMU
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input 
                            bind:value={name}
                            autofocus
                            placeholder="Masukkan namamu disini" type="text" id="large-input" class="text-center block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md lg:text-2xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <p class="text-sm font-light text-center text-red-400 dark:text-red-300">
                           {error}
                        </p>
                        <button type="submit" on:click={checkKhodam}
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg p-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Cek Khodam
                        </button>
                        <p class="text-sm font-light text-center text-gray-100 dark:text-gray-300">
                            Dibuat oleh
                            <a href="https://github.com/cinderjk" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Fahri
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    {:else}
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800">
                <div class="p-6 space-y-4 md:space-y-6 lg:space-y-4 sm:p-8">
                    <h1
                        class="text-md font-bold leading-tight tracking-tight text-center text-gray-900 md:text-lg dark:text-white">
                        {checkedName}, KHODAM YANG SELALU MENEMANIMU ADALAH
                    </h1>
                    <div class="space-y-4 md:space-y-6">
                        <h1
                            class="text-lg font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                            {result_name}
                        </h1>
                        <img class="h-auto max-w-full" src="/khodam/{result_image}" alt="image description">

                        <button type="submit" on:click={uncheckKhodam} autofocus
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg p-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Cek Lagi
                        </button>
                        <p class="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                            Dibuat oleh
                            <a href="https://github.com/cinderjk" class="font-medium text-primary-600 hover:underline dark:text-primary-500" target="_blank">
                                Fahri
                            </a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    {/if}
    </section>
</div>

<script>
    let name = '';
    let error = '';

    let checkedName = '';
    let isSubmit = false;
    let result_name = '';
    let result_image = '/eg.jpg';

    function checkKhodam() {
        if(name === '') {
            return error = 'Nama tidak boleh kosong';
        }
        isSubmit = true;
        checkedName = name.toUpperCase();

        const khodams = [
            {
                "name": "Rubah Api",
                "image": "rubah_api.jpg"
            },
            {
                "name": "Rubah Air",
                "image": "rubah_air.jpg"
            },
            {
                "name": "Dewa Yunani",
                "image": "dewa_yunani.jpg"
            },
            {
                "name": "Dewi Romawi",
                "image": "dewi_romawi.jpg"
            },
            {
                "name": "Samurai Api",
                "image": "samurai_api.jpg"
            }
        ]

        const result = khodams[Math.floor(Math.random() * khodams.length)];
        result_name = result.name;
        result_image = result.image;

        error = '';
    }

    function uncheckKhodam() {
        isSubmit = false;
        checkedName = '';
        name = '';
        error = '';
        result_name = '';
        result_image = '';
    }
</script>