<script>
    const modelPapers = [
        {
            subject: "Urdu",
            link: "https://fbise.edu.pk/ModelPaper/2024New/urdu/Final_Assessment_Framework_Model_Question_Paper_Urdu_HSSC-I.pdf#page=19"
        },
        {
            subject: "English",
            link: "https://fbise.edu.pk/ModelPaper/2024New/english/Final_Assessment_Framework_Model_Question_Paper_English_HSSC-I%20(2).pdf#page=31"
        },
        {
            subject: "Islamiyat",
            link: "https://fbise.edu.pk/ModelPaper/2024New/islamiyat/Final_Assessment_Framework_Model_Question_Paper_Islamiyat_HSSC-I.pdf#page=11"
        },
        {
            subject: "Chemistry",
            link: "https://fbise.edu.pk/ModelPaper/2024New/chemistry/Final_Assessment_Framework_Model_Question_Paper_Chemistry_HSSC-I.pdf#page=39"
        },
        {
            subject: "Biology",
            link: "https://fbise.edu.pk/ModelPaper/2024New/bio/Final_Assessment_Framework_Model_Question_Paper_Biology_HSSC-I.pdf#page=40"
        },
        {
            subject: "Physics",
            link: "https://fbise.edu.pk/ModelPaper/2024New/physics/Final_Assessment_Framework_Model_Question_Paper_Physics_HSSC-I.pdf#page=27"
        },
        {
            subject: "Computer Science",
            link: "https://fbise.edu.pk/ModelPaper/2024New/computer/Final_Assessment_Framework_Model_Question_Paper_ComputetScience_HSSC-I.pdf#page=24"
        },
        {
            subject: "Mathematics",
            link: "https://fbise.edu.pk/ModelPaper/2024New/maths/Final_Assessment_Framework_Model_Question_Paper_Mathematics_HSSC-I_.pdf#page=18"
        }
    ];

</script>

<div class="flex flex-wrap justify-start items-center gap-5 py-10">
    {#each modelPapers as modelPaper}
        <div class="card bg-base-200 border-1 border-primary w-96 card-md shadow-sm">
            <div class="card-body">
                <h2 class="card-title">{modelPaper.subject}</h2>
                <p>{modelPaper.subject} Theory Model Paper</p>
                <div class="justify-end card-actions">
                    <a href={modelPaper.link} target="blank" class="btn btn-primary md:flex hidden">View</a>
                    <a href={modelPaper.link} target="blank" class="btn btn-primary md:hidden flex">Download</a>
                </div>
            </div>
        </div>
    {/each}
</div>