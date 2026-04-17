The eukaryotic cell cycle is divided into four stages: G1, S, G2 and M. G0 is the rest phase. Cyclin-CDK complexes are what drives the cycle and checkpoint pathways guarentee the completion of each cycle before the next one is initiated.
```mermaid
graph TD
    %% --- MAIN CYCLE NODES ---
    G1["<b>G1 Phase (Gap 1):</b><br>Cell grows, copies organelles, and performs normal cellular functions"]
    
    G0["<b>G0 Phase (Resting):</b><br>Cell exits the cycle and stops dividing (e.g., neurons)"]
    
    S["<b>S Phase (Synthesis):</b><br>DNA replication occurs (chromosomes are duplicated)"]
    
    G2["<b>G2 Phase (Gap 2):</b><br>Additional growth and final preparation for cell division"]
    
    M["<b>M Phase (Mitosis & Cytokinesis):</b><br>Cell divides its copied DNA and cytoplasm into two new cells"]

    %% --- CONNECTIONS & FLOW ---
    G1 -->|"Restriction Point Passed"| S
    G1 -.->|"Exits Cycle"| G0
    G0 -.->|"Returns to Cycle (sometimes)"| G1
    
    S -->|"DNA Duplicated"| G2
    G2 -->|"Checkpoints Passed"| M
    M -->|"Daughter Cells Enter G1"| G1

    %% --- DIRECT STYLING FOR MAXIMUM COLOR ---
    
    %% G1 - Orange
    style G1 fill:#ffe0b2,stroke:#f57c00,stroke-width:2px,color:black
    
    %% G0 - Gray (Dashed border for resting state)
    style G0 fill:#f5f5f5,stroke:#9e9e9e,stroke-width:2px,color:black,stroke-dasharray: 5 5
    
    %% S - Blue
    style S fill:#b3e5fc,stroke:#0288d1,stroke-width:2px,color:black
    
    %% G2 - Purple
    style G2 fill:#e1bee7,stroke:#8e24aa,stroke-width:2px,color:black
    
    %% M - Red (Thicker border to highlight division)
    style M fill:#ffcdd2,stroke:#d32f2f,stroke-width:3px,color:black
```
Prophase, nuclear envelope breaks down and microtubules form mitotic spindles. Metaphase, attachment of chromosomes to microtubules via kinetochores.
Anaphase, microtubules pull sister chromatids toward opposite spindle pores. After chromosome movement to spindle poles, chromosomes decondense and cells reassemble nuclear membrane around daughter cell.
```mermaid
graph TD
    %% Define Nodes with strict quotation marks
    IP["<b>INTERPHASE (G1, S, G2)</b><br>Cell grows, copies DNA,<br>and prepares to divide"]
    
    PRO["<b>1. PROPHASE</b><br>Chromosomes condense<br>and spindle forms"]
    
    MET["<b>2. METAPHASE</b><br>Chromosomes align<br>at the cell equator"]
    
    ANA["<b>3. ANAPHASE</b><br>Sister chromatids are<br>pulled to opposite poles"]
    
    TEL["<b>4. TELOPHASE</b><br>Nuclear envelopes reform<br>around both sets"]
    
    CYTO["<b>CYTOKINESIS</b><br>Cytoplasm divides,<br>creating 2 daughter cells"]

    %% The Actual Biological Flow
    IP -->|"Triggers division"| PRO
    PRO -->|"Spindle attaches"| MET
    MET -->|"Chromosomes split"| ANA
    ANA -->|"Reach poles"| TEL
    TEL -->|"Membrane pinches"| CYTO
    CYTO -->|"Cells return to growth"| IP

    %% Invisible links to force a wide "U" shape layout
    IP ~~~ CYTO
    PRO ~~~ TEL

    %% Parser-Safe Direct Styling
    style IP fill:#eeeeee,stroke:#999999,stroke-width:3px,color:black
    style PRO fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:black
    style MET fill:#e1bee7,stroke:#6a1b9a,stroke-width:2px,color:black
    style ANA fill:#fff9c4,stroke:#fbc02d,stroke-width:3px,color:black
    style TEL fill:#c8e6c9,stroke:#2e7d32,stroke-width:2px,color:black
    style CYTO fill:#b3e5fc,stroke:#0288d1,stroke-width:2px,color:black
```

Links: [[Eukaryotes]]  
Date created: Wed/01/Apr/2026
