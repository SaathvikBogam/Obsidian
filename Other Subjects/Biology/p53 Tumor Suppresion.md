p53 works by arresting the cell cycle when there is damage, and shuts it off until repair is done. If it cannot be repaired, apoptosis occurs. A mutated p53 fails to do this and damaged cell continues to divide, which may result in cancer.

```mermaid
flowchart TD
    %% Shared Stressor at the Top
    Start["⚠️ CELLULAR STRESS <br> (DNA Damage, Hypoxia, Oxidative Stress)"] 
    
    Start --> Choice{p53 Status}

    %% PATH A: THE PROTECTOR (Normal)
    Choice -->|Normal / Wild Type| P53_Active["🧬 Active p53 Protein <br> (The Guardian of the Genome)"]
    
    subgraph Normal_Path ["🛡️ Normal Response"]
        P53_Active --> P21["⬆️ p21 Protein Produced <br> (CDK Inhibitor)"]
        P21 --> Arrest["🛑 G1 Cell Cycle Arrest <br> (Pauses the clock)"]
        
        Arrest --> Repair{"Can it be fixed?"}
        
        Repair -->|Yes| Fix["🔧 DNA Repair Enzymes <br> (GADD45)"]
        Fix --> Restart["▶️ Resume Cell Cycle"]
        
        Repair -->|No| Apoptosis["☠️ Programmed Cell Death <br> (BCL-2 / BAX Pathway)"]
    end

    %% PATH B: THE FAILURE (Mutated)
    Choice -->|Mutated / Inactive| P53_Dead["💔 Mutated p53 <br> (Protein Misfolded)"]
    
    subgraph Failure_Path ["⚠️ Tumorigenesis"]
        P53_Dead --> NoP21["❌ No p21 Brake"]
        NoP21 --> Continuous["🔄 Cell Cycle Continues <br> (Despite Damage)"]
        Continuous --> Mutate["🧬 Mutations Accumulate"]
        Mutate --> Cancer(("🚨 MALIGNANT NEOPLASM <br> (CANCER)"))
    end

    %% --- SOFT PASTEL STYLING ---
    %% Top Level
    style Start fill:#fdfcf0,color:#000,stroke:#d4af37,stroke-width:2px
    style Choice fill:#f8f9fa,color:#000,stroke:#333,stroke-width:2px
    
    %% Normal Path (Blues/Greens/Purples)
    style Normal_Path fill:#f0f7ff,stroke:#a2d2ff,stroke-dasharray: 5 5
    style P53_Active fill:#a2d2ff,color:#000,stroke:#5c9ead,stroke-width:2px
    style P21 fill:#bde0fe,color:#000,stroke:#5c9ead,stroke-width:1px
    style Arrest fill:#cdb4db,color:#000,stroke:#a682bc,stroke-width:1px
    style Repair fill:#fffacd,color:#000,stroke:#fbc02d,stroke-width:1px
    style Fix fill:#d4edda,color:#155724,stroke:#c3e6cb,stroke-width:1px
    style Restart fill:#c3e6cb,color:#155724,stroke:#28a745,stroke-width:2px
    style Apoptosis fill:#ffcfd2,color:#a4133c,stroke:#ff8fa3,stroke-width:2px

    %% Failure Path (Pinks/Reds)
    style Failure_Path fill:#fff5f5,stroke:#ffafcc,stroke-dasharray: 5 5
    style P53_Dead fill:#ffc8dd,color:#000,stroke:#ffafcc,stroke-width:2px
    style NoP21 fill:#ffafcc,color:#000,stroke:#fb6f92,stroke-width:1px
    style Continuous fill:#ffafcc,color:#000,stroke:#fb6f92,stroke-width:1px
    style Mutate fill:#ff8fa3,color:#000,stroke:#fb6f92,stroke-width:1px
    style Cancer fill:#c0392b,color:#fff,stroke:#800000,stroke-width:3px
```


Links: [[Cancer]] 
Date created: Wed/01/Apr/2026