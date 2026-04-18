The process of growing cells outside their natural environment, usually in a petri dish. 2D cell culture grows as a monolayer on surfaces like polystyrene or glass.
#### Primary Cell Cultures
Initial cell cultures established from a tissue are primary cell cultures. They closely resemble the original tissue. They have a limited lifespan, finite cells and more variability. Ex: Human fibroblasts, neurons and keratinocytes.
#### Immortal Cell Cultures
These are cells that have been genetically altered to divide indefinitely. They are easy to maintain, proliferate indefinitely and give reproducible results. Such permanent cell cultures provide a continuous, uniform source of cells that can be manipulated, cloned and propogated indefinitely. The first human cell line to be made was **HeLa**, isolated from a cervical cancer in 1951 and has been used in thousands of labs. Ex: HeLa, 239T
##### Cancer Cell Lines
Derived from tumors, are effectively immortal. Used in understanding oncogenic signaling, metastasis and drug resistance. Ex: A549 (Lung cancer), HCT116 (Colorectal cancer), PC-3 (Prostate cancer), HeLa (Cervical cancer), MCF-7 (Breast cancer).
##### Immune Cell Lines
Immune cells are cultured. Their uses include evaluating T cell responses and antibody cytotoxicity, drug development by screening new compounds for efficacy and toxicity and studyong signaling pathways and cytokine production. Ex: Jurkat (Human T cells), Raji (Human B cells), K-562-GFP (NK cells), THP-1 (Human Monocytes), RAW264.7 (Mouse macrophages)
##### Stem Cell Lines
Embryonic stem cells (ESCs) are pluripotent, can differentiate into any type. Induced pluripotent stem cells (iPSCs) are reprogammed somatic cells for patient specific modeling. It is used in developmental biology, regenerative medicine and differentiation studies.
##### Reporter Cell Lines
Engineered to express fluorescent or luminescent markers. Used for live cell imaging, real time monitoring of signaling pathways and gene expression dynamics.
```mermaid
graph TD
    %% Color Styling 
    %% process = blue arrows/boxes, cells = red flasks, dark = experiment circles, bank = icy blue, start = grey dotted
    classDef process fill:#629dd1,stroke:#4a7aa6,stroke-width:2px,color:#fff,rx:4,ry:4;
    classDef cells fill:#e6b8b7,stroke:#c0504d,stroke-width:2px,color:#000,rx:15,ry:15;
    classDef dark fill:#17365d,stroke:#0f243e,stroke-width:2px,color:#fff;
    classDef bank fill:#dce6f2,stroke:#b8cce4,stroke-width:2px,color:#000,rx:5,ry:5;
    classDef start fill:#fdfdfd,stroke:#999,stroke-width:2px,stroke-dasharray: 5 5;

    %% Initial Sources
    Tissue(START: Tissue):::start
    BankStart[❄️ START: Cell stock / bank]:::bank

    %% Processing & Thawing
    Iso[Cell isolation]:::process
    Thaw[Thawing]:::process

    %% First Cell Stage
    Cells1(🧪 Cells):::cells

    %% Culture Loop
    Culture1[Culture]:::process
    Passage[Passage]:::process
    Culture2[Culture*]:::process

    %% Second Cell Stage
    Cells2(🧪 Cells):::cells

    %% Outputs & Freezing
    Freeze[Freeze]:::process
    Exp((Experiment)):::dark
    Assay((Assay)):::dark
    BankEnd[❄️ Cell stock / bank]:::bank

    %% Flow Connections
    Tissue --> Iso
    Iso --> Cells1

    BankStart --> Thaw
    Thaw --> Cells1

    Cells1 --> Culture1
    Culture1 --> Passage
    Passage -->|Cycle| Culture1
    Passage --> Culture2
    Culture2 --> Cells2

    Cells2 --> Exp
    Cells2 --> Assay

    Cells2 --> Freeze
    Freeze --> BankEnd

    %% Preservation Loop (Dotted line keeps it from forcing the graph too wide)
    BankEnd -.->|Preserve| BankStart
```
