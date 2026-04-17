The cell cycle control system is based on two key families of proteins: CDKs (cyclin-dependent kinases), which induce downstream processes by phosphorylating selected proteins on serines and threonines; and cyclins, which bind to CDK molecules and control their ability to phosphorylate. Cyclins undergo a cycle of synthesis and degradation each cell cycle, but the level of CDK is constant.
There are four types of cyclins: G1/S, S, M and G1. In yeast, only one CDK binds all cyclins, and in vertebrates there are four. The full activation of Cyclin-CDK occurs when a separate enzyme (CAK) phosphorylates an amino acid near the active site which causes a small conformational change, allowing kinase to phosphorylate its target proteins to induce the cycle. Wee1 kinase phosphorylates two closely spaced sites above the active sites, removal of phosphates by cdc25 activates cyclin-CDK.
```mermaid
graph TD
    %% The G1/S Engine
    subgraph Cell_Engine ["⚙️ G1/S Transition"]
        D["Cyclin D + CDK4/6"] -->|Starts| E["Cyclin E + CDK2"]
        E -->|Triggers| S["🚀 S-Phase"]
    end

    %% The Brake
    pRb["🛑 pRb (The Brake)"] -.->|Blocks| E
    D -->|Phosphorylates| pRb
    pRb -.->|Releases| E

    %% Styling
    style Cell_Engine fill:#fdfbf7,stroke:#eec976
    style D fill:#bde0fe,stroke:#5c9ead
    style E fill:#cdb4db,stroke:#a682bc
    style pRb fill:#ffcfd2,stroke:#ff8fa3
```

Links: [[Cell Cycle]]
Date created: Wed/01/Apr/2026