Rb protein negatively regulates the cell cycle and is responsible for a major G1 checkpoint, blocking S phase and cell growth. The retinoblastoma protein (pRb) is dysfunctional in several major cancers due to its phosphorylation.
```mermaid
flowchart TD
    %% Splitting the top causes to force horizontal spread
    A1["🧬 Genetic Mutation<br>(RB1 Gene)"] -->|Causes| B
    A2["⚡ Hyperphosphorylation<br>(Overactive Cyclin/CDK)"] -->|Causes| B
    
    B("Inactive pRb Protein") -->|Fails to bind & inhibit| C{"E2F Transcription Factor<br>Remains Free & Active"}
    
    %% Splitting the S-phase targets to fan out the bottom half
    C -->|Transcribes| D1["Cyclin E & A"]
    C -->|Transcribes| D2["DNA Polymerases"]
    C -->|Transcribes| D3["Other S-Phase Genes"]
    
    D1 --> E
    D2 --> E
    D3 --> E
    
    E("Bypasses G1/S Checkpoint<br>Uncontrolled Cell Cycle Progression") --> F(("Tumorigenesis / Cancer"))

    %% Soft Pastel Styling
    style A1 fill:#a2d2ff,color:#000,stroke:#5c9ead,stroke-width:2px
    style A2 fill:#a2d2ff,color:#000,stroke:#5c9ead,stroke-width:2px
    style B fill:#bde0fe,color:#000,stroke:#5c9ead,stroke-width:1px
    style C fill:#cdb4db,color:#000,stroke:#a682bc,stroke-width:2px
    style D1 fill:#ffc8dd,color:#000,stroke:#e5989b,stroke-width:1px
    style D2 fill:#ffc8dd,color:#000,stroke:#e5989b,stroke-width:1px
    style D3 fill:#ffc8dd,color:#000,stroke:#e5989b,stroke-width:1px
    style E fill:#ffafcc,color:#000,stroke:#e5989b,stroke-width:2px
    style F fill:#e5989b,color:#fff,stroke:#b56576,stroke-width:3px
```


Links: [[Cancer]]
Date created: Wed/01/Apr/2026








