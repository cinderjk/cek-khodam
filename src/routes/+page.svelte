<svelte:head>
    <title>Cek Khodam</title>
    <meta name="description" content="Cek Khodam yang selalu menemanimu">
</svelte:head>

<div class="">
    <section
        class="bg-[url('/kuburan.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply h-screen">
    {#if !isSubmit}
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
            <a href="#" class="flex items-center mb-6 text-2xl lg:text-4xl font-semibold text-white text-center">
                    CEK KHODAM ONLINE
            </a>
            <div class="w-full bg-[rgba(255,255,255,0.2)] rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800">
                <div class="p-4 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
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
            <div class="w-full bg-[rgba(255,255,255,0.2)] rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800">
                <div class="p-4 space-y-4 md:space-y-6 lg:space-y-4 sm:p-8">
                    <h1
                        class="text-sm font-bold leading-tight tracking-tight text-center text-gray-300 md:text-lg dark:text-white">
                        {checkedName}, KHODAM KAMU ADALAH
                    </h1>
                    <div class="grid justify-items-center space-y-4 md:space-y-6">
                        <img class="h-auto max-w-72 text-center" src="/khodam/{result_image}" alt="image description">
                        <h1
                            class="text-lg font-bold leading-tight tracking-tight text-center text-white md:text-2xl dark:text-white">
                            {result_name}
                        </h1>
                        
                        <button type="submit" on:click={uncheckKhodam} autofocus
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg p-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Cek Lagi
                        </button>
                        <p class="text-sm font-light text-center text-gray-100 dark:text-gray-300">
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
            },
            {
                "name": "Naga Bear Brand",
                "image": "naga_bear_brand.jpeg"
            },
            {
                "name": "Buaya Darat",
                "image": "buaya_darat.jpeg"
            },
            {
                "name": "Buaya Darat",
                "image": "buaya_darat.jpeg"
            },
            {
                "name": "Tuyul Botak",
                "image": "tuyul_botak.jpeg"
            },
            {
                "name": "Tolak Angin",
                "image": "tolak_angin.jpg"
            },
            {
                "name": "Gardu PLN",
                "image": "gardu_pln.jpg"
            },
            {
                "name": "Badut Mixue",
                "image": "badut_mixue.jpeg"
            },
            {
                "name": "Lohan Arab",
                "image": "lohan_arab.jpeg"
            },
            {
                "name": "Barongsai",
                "image": "barongsai.jpeg"
            },
            {
                "name": "Rangda",
                "image": "rangda.png"
            },
            {
                "name": "Ambatukam",
                "image": "ambatukam.png"
            },
            {
                "name": "Dugong",
                "image": "dugong.png"
            },
            {
                "name": "Laptop Rusak",
                "image": "laptop_rusak.png"
            },
            {
                "name": "Beat Lipat",
                "image": "beat_lipat.png"
            },
        ]

        const result = khodams[Math.floor(Math.random() * khodams.length)];

        if(name == 'fahri' || name == 'fahri pano' || name == 'khoiri' || name == 'Fahri' || name == 'Fahri Pano' || name == 'Khoiri') {
            result.name = 'Greesella Sophina Adhalia ❤';
            result.image = 'cintakuu.jpg';
        }

        if(name == 'lensa' || name == 'ellen' || name == 'lensa ellentika' || name == 'Lensa' || name == 'Ellen' || name == 'Lensa Ellentika') {
            result.name = 'Choi Woo-shik ❤';
            result.image = 'cws.png';
        }
        result_name = result.name.toUpperCase();
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