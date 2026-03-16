export type Option = {
  text: string;
  isCorrect: boolean;
  feedback: string;
};

export type Question = {
  q: string;
  options: Option[];
};

export type Category = {
  name: string;
  weightage: string;
  target: number;
  questions: Question[];
};

export const quizData: Record<string, Category> = {
  "Problem Solving and Analytical Skills": {
    name: "Problem Solving and Analytical Skills",
    weightage: "20%",
    target: 200,
    questions: [
      {
        q: "A distributed computing cluster processes 240 distinct data packets in 4 hours. If an algorithmic optimization increases the processing efficiency by 25%, what is the revised throughput in packets per hour?",
        options: [
          { text: "60 packets/hr", isCorrect: false, feedback: "Incorrect. This is the baseline throughput before the 25% increase (240 / 4 = 60)." },
          { text: "75 packets/hr", isCorrect: true, feedback: "Correct. The baseline is 240 packets / 4 hours = 60 packets/hr. A 25% increase is 60 * 0.25 = 15. The new throughput is 60 + 15 = 75 packets/hr." },
          { text: "80 packets/hr", isCorrect: false, feedback: "Incorrect. This would represent a 33.3% increase over the baseline of 60 packets/hr." },
          { text: "90 packets/hr", isCorrect: false, feedback: "Incorrect. This would represent a 50% increase over the baseline of 60 packets/hr." }
        ]
      },
      {
        q: "Five subroutines (V, W, X, Y, Z) must be compiled in a specific sequence. Subroutine V must compile before W. Subroutine X must compile immediately after W. Z cannot compile first. If Y compiles third, which subroutine must compile last to satisfy all constraints?",
        options: [
          { text: "V", isCorrect: false, feedback: "Incorrect. V must compile before W, so it cannot be the last subroutine in the sequence." },
          { text: "W", isCorrect: false, feedback: "Incorrect. X must compile immediately after W, meaning W cannot be the last subroutine." },
          { text: "X", isCorrect: true, feedback: "Correct. Y is 3rd. W and X must be together (W then X). V is before W. Z is not first. The only valid sequence is V (1st), Z (2nd), Y (3rd), W (4th), and X (5th). Thus, X compiles last." },
          { text: "Z", isCorrect: false, feedback: "Incorrect. If Z is last, there is no valid position for V, W, and X that satisfies all constraints while keeping Y in the 3rd position." }
        ]
      },
      {
        q: "When faced with an intermittent, untraceable latency issue within a microservices architecture, which problem-solving methodology is most appropriate for isolating the root cause?",
        options: [
          { text: "Brute-force code refactoring", isCorrect: false, feedback: "Incorrect. Refactoring without identifying the root cause is inefficient and may introduce new bugs without solving the latency issue." },
          { text: "Data-driven telemetry analysis and hypothesis testing", isCorrect: true, feedback: "Correct. Systemic latency issues require gathering precise operational metrics, identifying statistical anomalies, formulating a hypothesis, and systematically isolating the faulty node." },
          { text: "Heuristic trial and error", isCorrect: false, feedback: "Incorrect. Trial and error is blind and highly ineffective for complex, intermittent distributed issues." },
          { text: "Abstract pattern generalization", isCorrect: false, feedback: "Incorrect. While recognizing patterns is helpful, concrete telemetry data is required to isolate the specific failing service node." }
        ]
      },
      {
        q: "If 40% of an allocated memory block equates to 80 megabytes, what is the total memory footprint of the application in megabytes?",
        options: [
          { text: "100 MB", isCorrect: false, feedback: "Incorrect. 40% of 100 MB is 40 MB, not 80 MB." },
          { text: "160 MB", isCorrect: false, feedback: "Incorrect. This is 80 * 2, which would be correct if 80 MB was 50% of the total." },
          { text: "200 MB", isCorrect: true, feedback: "Correct. If 40% (0.4) of a variable x equals 80, the equation is 0.4x = 80. Solving for x yields 80 / 0.4 = 200 MB." },
          { text: "240 MB", isCorrect: false, feedback: "Incorrect. This is 80 * 3, which does not align with the 40% ratio." }
        ]
      }
    ]
  },
  "Computer Networks and Cloud Computing": {
    name: "Computer Networks and Cloud Computing",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "Within the OSI seven-layer model, which layer bears the primary responsibility for translating, formatting, and encrypting data prior to its delivery to the Application layer?",
        options: [
          { text: "Transport Layer", isCorrect: false, feedback: "Incorrect. The Transport Layer (Layer 4) is responsible for end-to-end communication, reliability, and flow control, not data formatting or encryption." },
          { text: "Session Layer", isCorrect: false, feedback: "Incorrect. The Session Layer (Layer 5) manages sessions and dialogues between applications, not data translation." },
          { text: "Presentation Layer", isCorrect: true, feedback: "Correct. The Presentation Layer (Layer 6) acts as the network's data translator, handling data compression, formatting, and encryption/decryption to ensure readability by the Application layer." },
          { text: "Data Link Layer", isCorrect: false, feedback: "Incorrect. The Data Link Layer (Layer 2) handles node-to-node data transfer and error detection on the physical link." }
        ]
      },
      {
        q: "A financial institution operates a secure private cloud but experiences unpredictable, massive traffic spikes during the end of the fiscal year. Which cloud computing strategy optimally balances security compliance with demand scalability?",
        options: [
          { text: "Migrating all operations permanently to a public cloud.", isCorrect: false, feedback: "Incorrect. This would compromise the strict security compliance required for the institution's baseline sensitive operations." },
          { text: "Cloud bursting into a public cloud exclusively for the overflow traffic.", isCorrect: true, feedback: "Correct. Cloud bursting allows the institution to maintain sensitive operations within its secure private cloud while dynamically routing excess compute demands to a public cloud during traffic spikes, ensuring scalability and security." },
          { text: "Relying entirely on localized, on-premises virtualization.", isCorrect: false, feedback: "Incorrect. This approach lacks the necessary scalability to handle unpredictable, massive traffic spikes without significant, continuous capital expenditure." },
          { text: "Downgrading services to a peer-to-peer network.", isCorrect: false, feedback: "Incorrect. Peer-to-peer networks lack the centralized security, reliability, and performance required for a financial institution." }
        ]
      },
      {
        q: "In the architecture of Next Generation Networks (NGN), which specific component provides the control logic to bridge packet-switched IP networks with legacy circuit-switched networks?",
        options: [
          { text: "Session Border Controller (SBC)", isCorrect: false, feedback: "Incorrect. An SBC protects and regulates IP communications flows, but it does not provide the core control logic for bridging circuit and packet networks." },
          { text: "Media Gateway Controller (MGC)", isCorrect: true, feedback: "Correct. The Media Gateway Controller (MGC), or softswitch, manages the call control signaling and orchestration required to interface differing network types, commanding the Media Gateways." },
          { text: "Application Server (AS)", isCorrect: false, feedback: "Incorrect. An Application Server hosts and executes services (like voicemail or conferencing) but does not handle the core bridging logic between network types." },
          { text: "IP Routing Protocol", isCorrect: false, feedback: "Incorrect. Routing protocols determine paths for IP packets but do not bridge the fundamental gap between packet-switched and circuit-switched architectures." }
        ]
      },
      {
        q: "If a source transmits a 1000-bit packet over a link utilizing the stop-and-wait protocol, and the link exhibits a packet loss probability of 0.2, what is the expected total number of transmissions required to successfully transfer 200 packets?",
        options: [
          { text: "200", isCorrect: false, feedback: "Incorrect. This assumes zero packet loss, which contradicts the given 0.2 loss probability." },
          { text: "225", isCorrect: false, feedback: "Incorrect. This underestimates the impact of a 20% packet loss rate on the total transmissions." },
          { text: "250", isCorrect: true, feedback: "Correct. In a stop-and-wait protocol with a loss probability p, the expected number of transmissions per packet is 1 / (1 - p). Here, p = 0.2, so 1 / 0.8 = 1.25. For 200 packets, total expected transmissions = 200 * 1.25 = 250." },
          { text: "400", isCorrect: false, feedback: "Incorrect. This overestimates the required transmissions. It would imply an expected 2 transmissions per packet, which corresponds to a 0.5 loss probability." }
        ]
      }
    ]
  },
  "Programming (C++/Java/Python)": {
    name: "Programming (C++/Java/Python)",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In modern C++ development, what is the primary architectural advantage of utilizing smart pointers (e.g., std::shared_ptr) over traditional raw pointers?",
        options: [
          { text: "They bypass the compiler to increase runtime execution speed.", isCorrect: false, feedback: "Incorrect. Smart pointers actually introduce a slight runtime overhead compared to raw pointers due to reference counting or ownership tracking." },
          { text: "They provide automatic deterministic memory management, mitigating memory leaks.", isCorrect: true, feedback: "Correct. Smart pointers utilize the RAII idiom to ensure memory is automatically deallocated when the pointer goes out of scope or the reference count drops to zero, eliminating memory leaks." },
          { text: "They are exclusively required for multi-dimensional array initialization.", isCorrect: false, feedback: "Incorrect. Raw pointers or standard library containers like std::vector can also be used for multi-dimensional arrays." },
          { text: "They automatically convert integer data types to floating-point.", isCorrect: false, feedback: "Incorrect. Smart pointers manage memory; they do not perform implicit data type conversions." }
        ]
      },
      {
        q: "Which defining characteristic of the Python programming language dictates how variables are processed in memory during execution, distinguishing it from statically typed languages like Java?",
        options: [
          { text: "Python requires manual declaration of data types prior to compilation.", isCorrect: false, feedback: "Incorrect. This describes statically typed languages like Java or C++, not Python." },
          { text: "Python restricts variables to immutable states once assigned.", isCorrect: false, feedback: "Incorrect. While some Python types (like tuples or strings) are immutable, variables themselves can be reassigned to different objects." },
          { text: "Python is dynamically typed, interpreting variable data types at runtime based on assigned values.", isCorrect: true, feedback: "Correct. Python utilizes dynamic typing, meaning the interpreter assigns the data type at runtime based on the object referenced, providing immense flexibility." },
          { text: "Python does not support Object-Oriented Programming constructs.", isCorrect: false, feedback: "Incorrect. Python is a multi-paradigm language that fully supports Object-Oriented Programming." }
        ]
      },
      {
        q: "When engineering robust software architectures, which programmatic construct is primarily deployed to intercept anomalous operational states and prevent catastrophic application termination?",
        options: [
          { text: "Pointer arithmetic", isCorrect: false, feedback: "Incorrect. Pointer arithmetic is used for memory manipulation and can often be a source of errors, not a mechanism to intercept them." },
          { text: "Exception handling structures (try/catch/except)", isCorrect: true, feedback: "Correct. Exception handling allows developers to wrap volatile code in try blocks and intercept specific error classes, enabling graceful recovery or termination." },
          { text: "Deep copy constructors", isCorrect: false, feedback: "Incorrect. Deep copy constructors are used to duplicate objects and their underlying dynamically allocated memory, not to handle runtime errors." },
          { text: "Garbage collection pauses", isCorrect: false, feedback: "Incorrect. Garbage collection pauses are an artifact of automated memory management, not a construct deployed by developers to handle anomalous states." }
        ]
      },
      {
        q: "What occurs in C++ if a developer explicitly invokes the `delete` operator on a pointer that has already been assigned the `nullptr` value?",
        options: [
          { text: "A severe memory leak is generated.", isCorrect: false, feedback: "Incorrect. Deleting a null pointer does not leak memory; it simply does nothing." },
          { text: "The program throws a compilation error.", isCorrect: false, feedback: "Incorrect. The compiler allows calling delete on a pointer, regardless of whether it points to null or valid memory." },
          { text: "The program throws a runtime exception.", isCorrect: false, feedback: "Incorrect. Unlike dereferencing a null pointer, deleting a null pointer is explicitly defined as a safe, no-op operation in C++." },
          { text: "The operation is safely ignored with no adverse effects.", isCorrect: true, feedback: "Correct. The C++ standard explicitly guarantees that applying the delete operator to a null pointer has no effect, allowing developers to safely delete pointers without explicit null-checking." }
        ]
      }
    ]
  },
  "Data Structures & Algorithms": {
    name: "Data Structures & Algorithms",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In graph theory, which algorithmic technique is definitively utilized to compute the shortest path from a single source node to all other nodes, provided the graph contains strictly non-negative edge weights?",
        options: [
          { text: "Kruskal's Algorithm", isCorrect: false, feedback: "Incorrect. Kruskal's algorithm is used to find the Minimum Spanning Tree of a graph, not the shortest paths from a single source." },
          { text: "Dijkstra's Algorithm", isCorrect: true, feedback: "Correct. Dijkstra's algorithm uses a greedy approach to reliably find the shortest paths from a source to all other vertices in a weighted graph with non-negative edge weights." },
          { text: "Depth-First Search (DFS)", isCorrect: false, feedback: "Incorrect. DFS is used for traversing or searching tree or graph data structures, but it does not compute shortest paths in weighted graphs." },
          { text: "Bellman-Ford Algorithm", isCorrect: false, feedback: "Incorrect. While Bellman-Ford computes shortest paths, it is specifically designed to handle graphs with negative edge weights, making Dijkstra's the definitive choice for strictly non-negative weights due to its better performance." }
        ]
      },
      {
        q: "What is the asymptotic worst-case time complexity of executing a Binary Search operation to locate a specific element within an already sorted array of n elements?",
        options: [
          { text: "O(1)", isCorrect: false, feedback: "Incorrect. O(1) implies constant time, which would mean finding the element instantly regardless of array size, typical of hash table lookups, not binary search." },
          { text: "O(n)", isCorrect: false, feedback: "Incorrect. O(n) is the worst-case time complexity for a linear search, where every element must be checked sequentially." },
          { text: "O(log n)", isCorrect: true, feedback: "Correct. Binary search halves the search space during each iterative step. Because the dataset is repeatedly divided by two, the maximum number of steps scales logarithmically, expressed as O(log n)." },
          { text: "O(n log n)", isCorrect: false, feedback: "Incorrect. O(n log n) is typical for efficient sorting algorithms like Merge Sort or Quick Sort, not for searching an already sorted array." }
        ]
      },
      {
        q: "Consider an empty stack into which the elements A, B, C, and D are sequentially pushed. If two elements are subsequently popped from this stack and immediately enqueued into an empty queue, which element will be dequeued first?",
        options: [
          { text: "A", isCorrect: false, feedback: "Incorrect. A is at the bottom of the stack and will not be popped in the first two operations." },
          { text: "B", isCorrect: false, feedback: "Incorrect. B is below C and D in the stack and will not be popped in the first two operations." },
          { text: "C", isCorrect: false, feedback: "Incorrect. C is popped second (after D) and enqueued second. Therefore, it will be dequeued second." },
          { text: "D", isCorrect: true, feedback: "Correct. A stack is Last-In-First-Out (LIFO). Pushing A, B, C, D means D is at the top. Popping two elements removes D, then C. Enqueuing them into a queue (First-In-First-Out) places D at the front. Therefore, a dequeue operation will output D first." }
        ]
      },
      {
        q: "Which tree data structure inherently self-balances its height via rotational operations during insertion and deletion to guarantee O(log n) time complexity for search operations?",
        options: [
          { text: "Binary Search Tree (Unbalanced)", isCorrect: false, feedback: "Incorrect. An unbalanced BST can degrade to a linked list (O(n) search time) if elements are inserted in sorted order." },
          { text: "Trie", isCorrect: false, feedback: "Incorrect. A Trie is used for efficient string matching and prefix searches, but it does not self-balance its height via rotational operations." },
          { text: "AVL Tree", isCorrect: true, feedback: "Correct. An AVL tree is a self-balancing binary search tree that tracks the balance factor of nodes and performs specific rotations to ensure the height difference between sibling subtrees never exceeds 1, guaranteeing O(log n) access times." },
          { text: "Heap", isCorrect: false, feedback: "Incorrect. A heap is a complete binary tree used primarily for priority queues, guaranteeing O(1) access to the max/min element, but searching for an arbitrary element takes O(n) time." }
        ]
      }
    ]
  },
  "Operating Systems": {
    name: "Operating Systems",
    weightage: "5%",
    target: 50,
    questions: [
      {
        q: "Which CPU scheduling algorithm allocates execution time to processes in a strict cyclic order using predefined time slices, making it inherently preemptive and highly suitable for time-sharing systems?",
        options: [
          { text: "Shortest Job First (SJF)", isCorrect: false, feedback: "Incorrect. SJF selects the process with the smallest execution time next. It can be non-preemptive or preemptive, but it does not use strict cyclic time slices." },
          { text: "Priority Scheduling", isCorrect: false, feedback: "Incorrect. Priority scheduling allocates the CPU based on assigned priority levels, which can lead to starvation of low-priority processes, unlike cyclic time-sharing." },
          { text: "First-Come, First-Served (FCFS)", isCorrect: false, feedback: "Incorrect. FCFS is a non-preemptive algorithm that executes processes in the exact order they arrive, regardless of execution time." },
          { text: "Round Robin (RR)", isCorrect: true, feedback: "Correct. Round Robin assigns a fixed time quantum to each process in a cyclic queue. If a process doesn't finish within its quantum, it is preempted and moved to the back of the queue, ensuring fair time-sharing." }
        ]
      },
      {
        q: "In the domain of process synchronization, which specific construct utilizes integer variables to manage concurrent access to shared memory, thereby resolving critical section conflicts?",
        options: [
          { text: "Semaphore", isCorrect: true, feedback: "Correct. A semaphore is a synchronization primitive that uses atomic wait() and signal() operations on an integer variable to control thread access to common resources, preventing race conditions." },
          { text: "Virtual Memory", isCorrect: false, feedback: "Incorrect. Virtual memory is a memory management technique that abstracts physical RAM, not a synchronization construct for concurrent processes." },
          { text: "Spooler", isCorrect: false, feedback: "Incorrect. A spooler manages data output to slow peripheral devices (like printers) by buffering it, not managing concurrent access to shared memory." },
          { text: "Translation Lookaside Buffer (TLB)", isCorrect: false, feedback: "Incorrect. A TLB is a hardware cache used to speed up virtual-to-physical address translation, unrelated to process synchronization." }
        ]
      },
      {
        q: "To optimize main memory availability, an operating system may temporarily suspend a process and migrate its entirely allocated memory footprint to secondary storage. What is this technique called?",
        options: [
          { text: "Thrashing", isCorrect: false, feedback: "Incorrect. Thrashing is a detrimental state where the OS spends more time paging data in and out of memory than executing actual processes." },
          { text: "Paging", isCorrect: false, feedback: "Incorrect. Paging involves moving small, fixed-size blocks (pages) of memory between RAM and disk, not necessarily suspending and migrating an entire process's footprint at once." },
          { text: "Swapping", isCorrect: true, feedback: "Correct. Swapping involves moving an entire process out of physical RAM and into a designated space on the hard disk (swap space) to free up memory for active processes, later swapping it back when execution resumes." },
          { text: "Spooling", isCorrect: false, feedback: "Incorrect. Spooling buffers data for peripheral devices, it does not involve migrating process memory to optimize RAM availability." }
        ]
      },
      {
        q: "Which of the following conditions is NOT one of the necessary prerequisites (Coffman conditions) for a deadlock to occur in a multiprogramming environment?",
        options: [
          { text: "Mutual Exclusion", isCorrect: false, feedback: "Incorrect. Mutual exclusion (at least one resource must be held in a non-sharable mode) is a required Coffman condition." },
          { text: "Hold and Wait", isCorrect: false, feedback: "Incorrect. Hold and wait (a process holding at least one resource is waiting to acquire additional resources held by other processes) is a required Coffman condition." },
          { text: "Preemption", isCorrect: true, feedback: "Correct. The Coffman condition is 'No Preemption' (resources cannot be forcibly taken from a process). If preemption is allowed, deadlocks can be structurally avoided or broken." },
          { text: "Circular Wait", isCorrect: false, feedback: "Incorrect. Circular wait (a closed chain of processes exists, where each process holds at least one resource needed by the next process in the chain) is a required Coffman condition." }
        ]
      }
    ]
  },
  "Software Engineering": {
    name: "Software Engineering",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "According to the foundational principles of the Agile Manifesto, which operational outcome is valued more highly than maintaining comprehensive documentation?",
        options: [
          { text: "Contract negotiation", isCorrect: false, feedback: "Incorrect. The Agile Manifesto values 'Customer collaboration over contract negotiation'." },
          { text: "Working software", isCorrect: true, feedback: "Correct. The Agile Manifesto explicitly values 'Working software over comprehensive documentation', focusing on delivering functional increments to the client." },
          { text: "Rigid adherence to a predefined plan", isCorrect: false, feedback: "Incorrect. The Agile Manifesto values 'Responding to change over following a plan'." },
          { text: "Processes and tools", isCorrect: false, feedback: "Incorrect. The Agile Manifesto values 'Individuals and interactions over processes and tools'." }
        ]
      },
      {
        q: "A development team modifies a legacy application's codebase to ensure it remains functional on a newly released server operating system, without adding any new user-facing features. What category of maintenance does this represent?",
        options: [
          { text: "Corrective Maintenance", isCorrect: false, feedback: "Incorrect. Corrective maintenance involves fixing discovered bugs or defects, not adapting to a new environment." },
          { text: "Perfective Maintenance", isCorrect: false, feedback: "Incorrect. Perfective maintenance involves enhancing performance or adding new features based on user requests." },
          { text: "Preventive Maintenance", isCorrect: false, feedback: "Incorrect. Preventive maintenance involves refactoring code to forestall future degradation or improve maintainability." },
          { text: "Adaptive Maintenance", isCorrect: true, feedback: "Correct. Adaptive maintenance is triggered by changes in the software's external environment (like a new OS) to ensure continued operability without modifying core functionality." }
        ]
      },
      {
        q: "Within the discipline of Software Configuration Management (SCM), which feature is essential for providing developers with isolated environments to test changes without corrupting the main codebase baseline?",
        options: [
          { text: "Status Accounting", isCorrect: false, feedback: "Incorrect. Status accounting tracks and reports on the status of configuration items and change requests, it does not provide isolated environments." },
          { text: "Auditing", isCorrect: false, feedback: "Incorrect. Auditing verifies that the software product matches its requirements and configuration records." },
          { text: "Workspace Control", isCorrect: true, feedback: "Correct. Workspace control (often via branching in version control) allows developers to clone the baseline, create an isolated workspace, make changes, and test them safely before merging." },
          { text: "Identification", isCorrect: false, feedback: "Incorrect. Identification involves defining and labeling configuration items, not managing isolated development environments." }
        ]
      },
      {
        q: "What is the primary conceptual difference between a proactive risk management strategy and a reactive risk management strategy in a software project?",
        options: [
          { text: "Proactive addresses internal risks; reactive addresses external risks.", isCorrect: false, feedback: "Incorrect. Both strategies can address both internal and external risks." },
          { text: "Proactive occurs before risks materialize; reactive acts as a crisis response post-materialization.", isCorrect: true, feedback: "Correct. Proactive risk management identifies threats during planning and institutes mitigation strategies. Reactive management is 'firefighting' after a risk event has already impacted the project." },
          { text: "Proactive is exclusively for mitigating financial risks.", isCorrect: false, feedback: "Incorrect. Proactive risk management applies to all types of project risks (technical, schedule, financial, etc.)." },
          { text: "Proactive management occurs only during the maintenance phase.", isCorrect: false, feedback: "Incorrect. Proactive risk management should begin during the earliest planning phases of the SDLC." }
        ]
      }
    ]
  },
  "Web Development": {
    name: "Web Development",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In the context of a modern React application, what does the syntax extension JSX fundamentally represent?",
        options: [
          { text: "A secure database querying language.", isCorrect: false, feedback: "Incorrect. JSX is used for defining UI components, not querying databases." },
          { text: "A CSS preprocessor module.", isCorrect: false, feedback: "Incorrect. JSX handles HTML-like markup within JavaScript, it is not a CSS preprocessor like Sass or Less." },
          { text: "A JavaScript syntax extension that closely resembles HTML.", isCorrect: true, feedback: "Correct. JSX (JavaScript XML) allows developers to write HTML-like markup directly within JavaScript files, compiling down into standard React.createElement() calls." },
          { text: "A server-side routing protocol.", isCorrect: false, feedback: "Incorrect. JSX is a syntax extension for UI rendering, unrelated to server-side routing protocols." }
        ]
      },
      {
        q: "When architecting the interaction between a decoupled frontend interface and a backend server, which mechanism is deployed to fetch and transmit data asynchronously without triggering a full page reload?",
        options: [
          { text: "Relational Database Management Systems (RDBMS)", isCorrect: false, feedback: "Incorrect. An RDBMS stores data on the backend, but it is not the mechanism used by the frontend to asynchronously fetch that data." },
          { text: "HTML Form Submit Actions", isCorrect: false, feedback: "Incorrect. Standard HTML form submissions typically trigger a full page reload, contrary to the requirement for asynchronous data fetching." },
          { text: "CSS Flexbox", isCorrect: false, feedback: "Incorrect. CSS Flexbox is a layout module for styling, completely unrelated to data transmission." },
          { text: "Application Programming Interfaces (APIs)", isCorrect: true, feedback: "Correct. APIs act as the standardized communication bridge. Utilizing asynchronous JavaScript (like fetch or Axios), the client requests and receives data dynamically in the background, enabling SPAs." }
        ]
      },
      {
        q: "Which of the following CSS layout modules is specifically engineered for designing complex, two-dimensional responsive web interfaces consisting simultaneously of interconnected rows and columns?",
        options: [
          { text: "CSS Box Model", isCorrect: false, feedback: "Incorrect. The Box Model defines the margins, borders, padding, and content area of individual elements, not complex two-dimensional layouts." },
          { text: "CSS Grid", isCorrect: true, feedback: "Correct. CSS Grid provides a two-dimensional grid-based layout system, allowing precise control over both rows and columns, making it ideal for overall page architectures." },
          { text: "CSS Flexbox", isCorrect: false, feedback: "Incorrect. While powerful, Flexbox is designed primarily for aligning items in a single dimension (either a row or a column), not complex two-dimensional grids." },
          { text: "Inline Styling", isCorrect: false, feedback: "Incorrect. Inline styling applies CSS directly to individual HTML elements and is not a layout module." }
        ]
      },
      {
        q: "What is the primary operational advantage of utilizing asynchronous programming models (e.g., Promises, async/await) in a Node.js backend environment?",
        options: [
          { text: "It forces the server to process requests sequentially, ensuring data security.", isCorrect: false, feedback: "Incorrect. Processing requests sequentially would severely bottleneck the server, and asynchronous models do not inherently ensure data security." },
          { text: "It prevents the main execution thread from blocking during high-latency I/O operations.", isCorrect: true, feedback: "Correct. Node.js operates on a single-threaded event loop. Asynchronous models offload high-latency operations (like database queries), allowing the server to handle concurrent requests without locking the main thread." },
          { text: "It automatically encrypts all HTTP traffic.", isCorrect: false, feedback: "Incorrect. Asynchronous programming manages execution flow; it does not perform automatic encryption." },
          { text: "It eliminates the need for database indexing.", isCorrect: false, feedback: "Incorrect. Database indexing is a separate optimization technique for query performance and is not replaced by asynchronous programming." }
        ]
      }
    ]
  },
  "AI / Machine Learning and Data Analytics": {
    name: "AI / Machine Learning and Data Analytics",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "During the training phase of a machine learning model, what phenomenon occurs when the model exhibits exceptional accuracy on the training data but fails completely to generalize to unseen testing data?",
        options: [
          { text: "Underfitting", isCorrect: false, feedback: "Incorrect. Underfitting occurs when a model is too simple to capture the underlying patterns, resulting in poor performance on both training and testing data." },
          { text: "Regularization", isCorrect: false, feedback: "Incorrect. Regularization is a technique used to *prevent* overfitting by penalizing complex models, not the phenomenon itself." },
          { text: "Overfitting", isCorrect: true, feedback: "Correct. Overfitting occurs when a model is excessively complex, 'memorizing' the noise and exact details of the training dataset rather than learning generalized patterns, leading to poor performance on new data." },
          { text: "Cross-validation", isCorrect: false, feedback: "Incorrect. Cross-validation is a technique used to evaluate model performance and detect overfitting, not the phenomenon of failing to generalize." }
        ]
      },
      {
        q: "Which specific machine learning paradigm is fundamentally designed to identify inherent groupings, associations, or structures within a dataset that completely lacks predefined labels or target variables?",
        options: [
          { text: "Unsupervised Clustering", isCorrect: true, feedback: "Correct. Unsupervised learning deals exclusively with unlabelled data. Clustering algorithms (like K-Means) autonomously measure data point similarities and group them into distinct clusters based on mathematical proximity." },
          { text: "Logistic Regression", isCorrect: false, feedback: "Incorrect. Logistic regression is a supervised learning algorithm used for binary classification, requiring labeled training data." },
          { text: "Linear Regression", isCorrect: false, feedback: "Incorrect. Linear regression is a supervised learning algorithm used for predicting continuous values, requiring labeled training data." },
          { text: "Supervised Classification", isCorrect: false, feedback: "Incorrect. Supervised classification requires meticulously labeled training datasets to infer mapping functions." }
        ]
      },
      {
        q: "What is the primary conceptual distinction between 'bagging' and 'boosting' within the context of ensemble machine learning methods?",
        options: [
          { text: "Bagging relies on linear models, while boosting relies on neural networks.", isCorrect: false, feedback: "Incorrect. Both bagging and boosting can utilize various base models, most commonly decision trees." },
          { text: "Bagging combines predictions via voting; boosting combines predictions via simple averaging.", isCorrect: false, feedback: "Incorrect. Both methods can use voting (for classification) or averaging (for regression) to combine predictions." },
          { text: "Bagging trains models sequentially, while boosting trains them independently.", isCorrect: false, feedback: "Incorrect. This is the exact opposite of how bagging and boosting operate." },
          { text: "Bagging trains each model independently in parallel, whereas boosting trains models sequentially to focus on previously misclassified examples.", isCorrect: true, feedback: "Correct. Bagging (Bootstrap Aggregating) creates parallel models on random subsets to reduce variance. Boosting builds models sequentially, optimizing each new model to correct the errors of previous models, reducing bias." }
        ]
      },
      {
        q: "What is the primary methodological advantage of utilizing a k-fold cross-validation technique during the model evaluation phase?",
        options: [
          { text: "It automatically reduces the dimensionality of the input features.", isCorrect: false, feedback: "Incorrect. Dimensionality reduction is achieved through techniques like PCA, not cross-validation." },
          { text: "It evaluates model robustness and stability by partitioning the available data into k distinct subsets for iterative training and testing.", isCorrect: true, feedback: "Correct. K-fold cross-validation mitigates the risk of a 'lucky' train/test split by dividing data into k folds, training on k-1 folds, and testing on the remaining fold, repeating k times for a robust average performance metric." },
          { text: "It significantly accelerates the computational speed of the training algorithm.", isCorrect: false, feedback: "Incorrect. Cross-validation actually increases computational time because the model must be trained k times." },
          { text: "It expands the original dataset by generating synthetic data points.", isCorrect: false, feedback: "Incorrect. Data augmentation generates synthetic data points; cross-validation only partitions the existing dataset." }
        ]
      }
    ]
  },
  "Cyber Security": {
    name: "Cyber Security",
    weightage: "5%",
    target: 50,
    questions: [
      {
        q: "Why is a polymorphic virus considered significantly more difficult for traditional, signature-based antivirus software to detect and neutralize compared to standard malware?",
        options: [
          { text: "It resides exclusively in the computer's volatile RAM, leaving no disk footprint.", isCorrect: false, feedback: "Incorrect. This describes fileless malware, not specifically a polymorphic virus." },
          { text: "It systematically deletes the antivirus software's executable files upon entry.", isCorrect: false, feedback: "Incorrect. While some malware attempts this, it is not the defining characteristic that makes polymorphic viruses hard to detect via signatures." },
          { text: "It utilizes encryption or obfuscation to alter its code structure and signature with each successive infection.", isCorrect: true, feedback: "Correct. Traditional antivirus relies on static signature matching. Polymorphic viruses dynamically change their appearance (signature) while retaining their malicious functionality, rendering static signature databases obsolete." },
          { text: "It operates as a worm, requiring no host file to propagate.", isCorrect: false, feedback: "Incorrect. A worm is a standalone malware program that replicates itself, but this does not explain why signature-based detection fails against polymorphic viruses." }
        ]
      },
      {
        q: "According to standard Incident Response Methodology, what is the immediate, mandatory next step an incident response team must take after successfully verifying that a security breach is actively occurring?",
        options: [
          { text: "Eradication", isCorrect: false, feedback: "Incorrect. Eradication (removing the threat) occurs only after the threat has been successfully contained." },
          { text: "Containment", isCorrect: true, feedback: "Correct. The incident response lifecycle dictates that once a threat is positively identified, the immediate priority must be Containment—isolating affected systems to prevent further lateral movement or data exfiltration." },
          { text: "Recovery", isCorrect: false, feedback: "Incorrect. Recovery (restoring systems to normal operation) occurs after containment and eradication." },
          { text: "Lessons Learned", isCorrect: false, feedback: "Incorrect. Lessons Learned is the final phase of the incident response lifecycle, conducted after the incident is fully resolved." }
        ]
      },
      {
        q: "Which specific cryptographic construct is utilized to ensure data integrity by taking an input of arbitrary length and producing a mathematically unique, fixed-size string that cannot be reverse-engineered?",
        options: [
          { text: "Digital Certificate", isCorrect: false, feedback: "Incorrect. A digital certificate binds a public key to an identity, it does not directly hash data for integrity checks." },
          { text: "Streaming Cipher", isCorrect: false, feedback: "Incorrect. A streaming cipher is used for encrypting data for confidentiality, not for generating a fixed-size string for integrity verification." },
          { text: "Symmetric Key", isCorrect: false, feedback: "Incorrect. A symmetric key is used for both encryption and decryption, but it is not the construct that produces a fixed-size string from arbitrary input." },
          { text: "Message Digest (Hash)", isCorrect: true, feedback: "Correct. A message digest (or cryptographic hash function) is a one-way mathematical operation heavily utilized for integrity checks. Any alteration to the input data produces a drastically different output hash, signaling tampering." }
        ]
      },
      {
        q: "Among symmetric key encryption algorithms, which technique encrypts data by processing it continuously, one bit or byte at a time, making it highly efficient for continuous data streams?",
        options: [
          { text: "Block Cipher", isCorrect: false, feedback: "Incorrect. Block ciphers (like AES) encrypt data in fixed-size blocks (e.g., 128-bit blocks), not continuously bit by bit." },
          { text: "Message Digest", isCorrect: false, feedback: "Incorrect. A message digest provides data integrity, not encryption for confidentiality." },
          { text: "Streaming Cipher", isCorrect: true, feedback: "Correct. A streaming cipher (such as RC4) encrypts a continuous stream of data sequentially, bit by bit or byte by byte, using a keystream, making it faster for real-time communications." },
          { text: "Public Key Infrastructure", isCorrect: false, feedback: "Incorrect. PKI is a framework for managing digital certificates and public-key encryption, not a specific symmetric encryption technique." }
        ]
      }
    ]
  },
  "Databases": {
    name: "Databases",
    weightage: "10%",
    target: 100,
    questions: [
      {
        q: "In the context of modern database architecture, what is the primary operational driver for adopting a NoSQL database over a traditional Relational Database Management System (RDBMS)?",
        options: [
          { text: "The strict enforcement of standardized SQL for all analytical queries.", isCorrect: false, feedback: "Incorrect. NoSQL databases typically do not use standardized SQL, and their primary driver is not strict query enforcement." },
          { text: "High normalization to completely eliminate all forms of data redundancy.", isCorrect: false, feedback: "Incorrect. NoSQL databases often embrace denormalization and data redundancy to optimize read performance." },
          { text: "Schema flexibility and the ability to scale horizontally to accommodate massive volumes of unstructured data.", isCorrect: true, feedback: "Correct. NoSQL databases bypass rigid tabular schemas, offering flexible data models that allow developers to ingest unstructured data at high velocity and scale horizontally across commodity hardware." },
          { text: "The absolute guarantee of ACID properties for every transaction.", isCorrect: false, feedback: "Incorrect. While some NoSQL databases offer ACID guarantees, many prioritize availability and partition tolerance (BASE properties) over strict ACID compliance." }
        ]
      },
      {
        q: "Within a distributed database environment, which specific mechanism is deployed to copy and maintain identical datasets across multiple geographical sites to enhance fault tolerance and localize read access?",
        options: [
          { text: "Normalization", isCorrect: false, feedback: "Incorrect. Normalization is a design process to reduce data redundancy within a single database schema, not a mechanism for distributing data across sites." },
          { text: "Replication", isCorrect: true, feedback: "Correct. Replication involves creating synchronized copies of the database across different network nodes. This provides high availability and fault tolerance, while speeding up local read queries for distributed users." },
          { text: "Fragmentation", isCorrect: false, feedback: "Incorrect. Fragmentation (or sharding) involves dividing a database into smaller parts and distributing them across nodes, rather than copying identical datasets to multiple sites." },
          { text: "Concurrency Control", isCorrect: false, feedback: "Incorrect. Concurrency control manages simultaneous transactions to prevent data inconsistency, not the physical distribution of datasets." }
        ]
      },
      {
        q: "Which severe relational database anomaly occurs when a distinct, independent piece of information cannot be recorded into a table unless an irrelevant, secondary piece of information is simultaneously inserted?",
        options: [
          { text: "Update Anomaly", isCorrect: false, feedback: "Incorrect. An update anomaly occurs when a piece of data is changed in one place but not in all places it is redundantly stored." },
          { text: "Deletion Anomaly", isCorrect: false, feedback: "Incorrect. A deletion anomaly occurs when deleting a row to remove one fact inadvertently deletes another independent fact." },
          { text: "Concurrency Anomaly", isCorrect: false, feedback: "Incorrect. Concurrency anomalies occur when multiple transactions interfere with each other during simultaneous execution." },
          { text: "Insertion Anomaly", isCorrect: true, feedback: "Correct. An insertion anomaly arises in unnormalized tables where a primary key constraint forces the inclusion of unrelated data (e.g., unable to add a new course because no students are enrolled in it yet)." }
        ]
      },
      {
        q: "If a development team needs to build a highly interconnected application, such as a social network recommendation engine that maps complex user relationships and interactions, which NoSQL database type is optimal?",
        options: [
          { text: "Graph Database", isCorrect: true, feedback: "Correct. Graph databases are specifically engineered to store entities (nodes) and the relationships between them (edges). They excel at traversing highly interconnected data with minimal overhead, making them vastly superior for social networking." },
          { text: "Key-Value Store", isCorrect: false, feedback: "Incorrect. Key-value stores are highly performant for simple lookups but lack the structure to efficiently query complex relationships between entities." },
          { text: "Wide-Column Store", isCorrect: false, feedback: "Incorrect. Wide-column stores are optimized for massive data velocity and analytical queries over large datasets, but not for traversing complex, deep relationships." },
          { text: "Document-Oriented Database", isCorrect: false, feedback: "Incorrect. While document databases are flexible, they are not optimized for querying deep, interconnected relationships between separate documents." }
        ]
      }
    ]
  }
};
