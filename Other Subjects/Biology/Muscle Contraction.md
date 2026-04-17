Muscle fibres contain single, elongated, multinucleated cells that arise from fusion of precursor cells. The fibres are made up of many myofibrils surrounded by sarcoplasmic reticulum. Organization of thick and thin filaments in a myofibril gives it a striated appearance. When muscle contracts, I band narrows and Z disks move closer.

![[Pasted image 20260401171953.png|500]]

Muscle contraction occurs by sliding of thick and thin filaments past each other so that Z disks in neighboring I bands grow closer. The thick and thin filaments are interleaved such that each thick filament is surrounded by 6 thin ones. It is also regulated by tropomyosin and troponin, which is attached to actin-tropomyosin complex. The subunits of troponin - I, C and T - prevent binding of myosin head to actin, has a binding site for $Ca^{+2}$ and link entire troponin complex to tropomyosin respectively. When muscle receives a signal to contract, $Ca^{+2}$ is released from sarcoplasmic reticulum and binds to troponin C, which alter position of troponin I so as to relieve inhibition and allow contraction.
```mermaid
graph TD
    classDef stateNode fill:#fafafa,stroke:#333,stroke-width:2px,rx:10,ry:10,color:black,font-size:16px;
    classDef arrowText fill:#fff,stroke:none,color:#333;

    %% --- THE MAIN LOOP ---

    A["<b>1. Initial Attached State:</b> Myosin head is tightly bound to actin filament (Nucleotide-free)"]:::stateNode
    
    B["<b>2. Detached State:</b> ATP binds to myosin head, causing dissociation from actin"]:::stateNode
    
    C["<b>3. Cocked State:</b> ATP hydrolysis pivots myosin head. Head has high affinity for actin (ADP+Pi bound)"]:::stateNode
    
    D["<b>4. Power Stroke & Restart:</b> Pi release triggers power stroke (filament sliding) and ADP release"]:::stateNode

    %% --- CONNECTIONS WITH VISIBLE TEXT ---
    
    A -->|"&nbsp;&nbsp;&nbsp;<b>+ ATP Binds</b>&nbsp;&nbsp;&nbsp;"| B
    B -->|"&nbsp;&nbsp;&nbsp;<b>ATP Hydrolysis</b>&nbsp;&nbsp;&nbsp;"| C
    C -->|"&nbsp;&nbsp;&nbsp;<b>Binds Actin & Pi Release</b>&nbsp;&nbsp;&nbsp;"| D
    D -->|"&nbsp;&nbsp;&nbsp;<b>Power Stroke & ADP Release</b>&nbsp;&nbsp;&nbsp;"| A

    %% --- MAXIMAL COLOR STYLING (Parser-Safe Method) ---
    
    %% Red Palette (State 1)
    style A fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:black
    
    %% Purple Palette (State 2)
    style B fill:#e1bee7,stroke:#6a1b9a,stroke-width:2px,color:black
    
    %% Yellow/Gold Palette (State 3 - Key Energetic Step)
    style C fill:#fff9c4,stroke:#fbc02d,stroke-width:3px,color:black
    
    %% Green Palette (State 4 - Final Result)
    style D fill:#c8e6c9,stroke:#2e7d32,stroke-width:2px,color:black
```


Links: [[Cytoskeleton]]
Date created: Wed/01/Apr/2026


