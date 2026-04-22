18 carbon atoms (6 molecules of 3-phosphoglycerate) are produced which undergo a cycle of reactions that regenerates the 3 molecules of ribulose 1,5-bisphosphate used in the initial carbon fixing step. Net gain is one molecule of glyceraldehyde 3-phosphate. 3 molecules of $ATP$ and 2 molecules of $NADPH$ are consumed for each $CO_{2}$ converted into carbohydrate.
$$
3CO_{2}+9ATP+6NADPH\xrightarrow{\text{water}} \text{glyceraldehyde 3-phosphate}+8P_{i}+9ADP+6NADP^{+}
$$
```mermaid
graph TD
    classDef input fill:#d4edda,stroke:#28a745,stroke-width:2px,color:#155724;
    classDef process fill:#fff3cd,stroke:#ffc107,stroke-width:2px,color:#856404;
    classDef output fill:#cce5ff,stroke:#007bff,stroke-width:2px,color:#004085;
    classDef molecule fill:#f8f9fa,stroke:#6c757d,stroke-width:2px,color:#383d41;

    CO2([CO2]):::input --> Fixation
    RuBP([RuBP]):::molecule --> Fixation

    subgraph Phase 1: Carbon Fixation
        Fixation(Catalyzed by Rubisco enzyme):::process
    end

    Fixation --> PGA([3-PGA]):::molecule

    PGA --> Reduction
    ATP1([6ATP]):::input -.-> Reduction
    NADPH([6NADPH]):::input -.-> Reduction

    subgraph Phase 2: Reduction
        Reduction(Phosphorylation and Reduction):::process
    end

    Reduction --> G3P([G3P]):::molecule

    G3P -->|1 G3P exits the cycle| Glucose([Glucose & other Carbohydrates]):::output
    G3P -->|5 G3P continue| Regeneration

    ATP2([3ATP]):::input -.-> Regeneration

    subgraph Phase 3: Regeneration
        Regeneration(Regeneration of RuBP):::process
    end

    Regeneration --> RuBP
```

Links: [[Chloroplast]]
Date created: Mon/30/Mar/2026









