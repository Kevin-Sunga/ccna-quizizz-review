window.QUESTION_BANK = [
  {
    "id": "Modules 1-2-1",
    "module": "Modules 1-2",
    "number": 1,
    "topic": "OSPF",
    "question": "1. What is a function of OSPF hello packets?",
    "choices": [
      "to send specifically requested link-state records",
      "to discover neighbors and build adjacencies between them",
      "to ensure database synchronization between routers",
      "to request specific link-state records from neighbor routers"
    ],
    "answers": [
      "to discover neighbors and build adjacencies between them"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.2.4",
    "gradable": true,
    "raw": "1. What is a function of OSPF hello packets?\n\nto send specifically requested link-state records\nto discover neighbors and build adjacencies between them\nto ensure database synchronization between routers\nto request specific link-state records from neighbor routers\nExplanation: Topic 1.2.4"
  },
  {
    "id": "Modules 1-2-2",
    "module": "Modules 1-2",
    "number": 2,
    "topic": "OSPF",
    "question": "2. Which OSPF packet contains the different types of link-state advertisements?",
    "choices": [
      "hello",
      "DBD",
      "LSR",
      "LSU",
      "LSAck"
    ],
    "answers": [
      "LSU"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.2.3",
    "gradable": true,
    "raw": "2. Which OSPF packet contains the different types of link-state advertisements?\n\nhello\nDBD\nLSR\nLSU\nLSAck\nExplanation: Topic 1.2.3"
  },
  {
    "id": "Modules 1-2-3",
    "module": "Modules 1-2",
    "number": 3,
    "topic": "OSPF",
    "question": "3. Which three statements describe features of the OSPF topology table? (Choose three.)",
    "choices": [
      "It is a link-state database that represents the network topology.",
      "Its contents are the result of running the SPF algorithm.",
      "When converged, all routers in an area have identical topology tables.",
      "The topology table contains feasible successor routes.",
      "The table can be viewed via the show ip ospf database command.",
      "After convergence, the table only contains the lowest cost route entries for all known networks."
    ],
    "answers": [
      "It is a link-state database that represents the network topology.",
      "When converged, all routers in an area have identical topology tables.",
      "The table can be viewed via the show ip ospf database command."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.2\n\nThe topology table on an OSPF router is a link-state database (LSDB) that lists information about all other routers in the network, and represents the network topology. All routers within an area have identical link-state databases, and the table can be viewed using the show ip ospf database command. The EIGRP topology table contains feasible successor routes. This concept is not used by OSPF. The SPF algorithm uses the LSDB to produce the unique routing table for each router which contains the lowest cost route entries for known networks.",
    "gradable": true,
    "raw": "3. Which three statements describe features of the OSPF topology table? (Choose three.)\n\nIt is a link-state database that represents the network topology.\nIts contents are the result of running the SPF algorithm.\nWhen converged, all routers in an area have identical topology tables.\nThe topology table contains feasible successor routes.\nThe table can be viewed via the show ip ospf database command.\nAfter convergence, the table only contains the lowest cost route entries for all known networks.\nExplanation: Topic 1.1.2\n\nThe topology table on an OSPF router is a link-state database (LSDB) that lists information about all other routers in the network, and represents the network topology. All routers within an area have identical link-state databases, and the table can be viewed using the show ip ospf database command. The EIGRP topology table contains feasible successor routes. This concept is not used by OSPF. The SPF algorithm uses the LSDB to produce the unique routing table for each router which contains the lowest cost route entries for known networks."
  },
  {
    "id": "Modules 1-2-4",
    "module": "Modules 1-2",
    "number": 4,
    "topic": "OSPF",
    "question": "4. What does an OSPF area contain?",
    "choices": [
      "routers that share the same router ID",
      "routers whose SPF trees are identical",
      "routers that have the same link-state information in their LSDBs",
      "routers that share the same process ID"
    ],
    "answers": [
      "routers that have the same link-state information in their LSDBs"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.4\n\nAn OSPF area contains one set of link-state information, although each router within the area will process that information individually to form its own SPF tree. OSPF process IDs are locally significant and are created by the administrator. Router IDs uniquely identify each router.",
    "gradable": true,
    "raw": "4. What does an OSPF area contain?\n\nrouters that share the same router ID\nrouters whose SPF trees are identical\nrouters that have the same link-state information in their LSDBs\nrouters that share the same process ID\nExplanation: Topic 1.1.4\n\nAn OSPF area contains one set of link-state information, although each router within the area will process that information individually to form its own SPF tree. OSPF process IDs are locally significant and are created by the administrator. Router IDs uniquely identify each router."
  },
  {
    "id": "Modules 1-2-5",
    "module": "Modules 1-2",
    "number": 5,
    "topic": "OSPF",
    "question": "5.",
    "choices": [
      "the use of multiple areas",
      "frequent SPF calculations",
      "autosummarization",
      "the election of designated routers"
    ],
    "answers": [
      "the use of multiple areas"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.4\n\nOSPF supports the concept of areas to prevent larger routing tables, excessive SPF calculations, and large LSDBs. Only routers within an area share link-state information. This allows OSPF to scale in a hierarchical fashion with all areas that connect to a backbone area.",
    "gradable": true,
    "raw": "5.\n\nthe use of multiple areas\nfrequent SPF calculations\nautosummarization\nthe election of designated routers\nExplanation: Topic 1.1.4\n\nOSPF supports the concept of areas to prevent larger routing tables, excessive SPF calculations, and large LSDBs. Only routers within an area share link-state information. This allows OSPF to scale in a hierarchical fashion with all areas that connect to a backbone area."
  },
  {
    "id": "Modules 1-2-6",
    "module": "Modules 1-2",
    "number": 6,
    "topic": "OSPF",
    "question": "6. Which OSPF data structure is identical on all OSPF routers that share the same area?",
    "choices": [
      "forwarding database",
      "link-state database",
      "adjacency database",
      "routing table"
    ],
    "answers": [
      "link-state database"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.2\n\nRegardless of which OSPF area a router resides in, the adjacency database, routing table, and forwarding database are unique for each router. The link-state database lists information about all other routers within an area and is identical across all OSPF routers participating in that area.",
    "gradable": true,
    "raw": "6. Which OSPF data structure is identical on all OSPF routers that share the same area?\n\nforwarding database\nlink-state database\nadjacency database\nrouting table\nExplanation: Topic 1.1.2\n\nRegardless of which OSPF area a router resides in, the adjacency database, routing table, and forwarding database are unique for each router. The link-state database lists information about all other routers within an area and is identical across all OSPF routers participating in that area."
  },
  {
    "id": "Modules 1-2-7",
    "module": "Modules 1-2",
    "number": 7,
    "topic": "OSPF",
    "question": "7. Which step does an OSPF-enabled router take immediately after establishing an adjacency with another router?",
    "choices": [
      "builds the topology table",
      "exchanges link-state advertisements",
      "chooses the best path",
      "executes the SPF algorithm"
    ],
    "answers": [
      "exchanges link-state advertisements"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.3\n\nThe OSPF operation steps are as follows:\n\nEstablish neighbor adjacencies\nExchange link-state advertisements\nBuild the topology table\nExecute the SPF algorithm\nChoose the best route",
    "gradable": true,
    "raw": "7. Which step does an OSPF-enabled router take immediately after establishing an adjacency with another router?\n\nbuilds the topology table\nexchanges link-state advertisements\nchooses the best path\nexecutes the SPF algorithm\nExplanation: Topic 1.1.3\n\nThe OSPF operation steps are as follows:\n\nEstablish neighbor adjacencies\nExchange link-state advertisements\nBuild the topology table\nExecute the SPF algorithm\nChoose the best route"
  },
  {
    "id": "Modules 1-2-8",
    "module": "Modules 1-2",
    "number": 8,
    "topic": "OSPF",
    "question": "8. A network engineer has manually configured the hello interval to 15 seconds on an interface of a router that is running OSPFv2. By default, how will the dead interval on the interface be affected?",
    "choices": [
      "The dead interval will not change from the default value.",
      "The dead interval will now be 30 seconds.",
      "The dead interval will now be 60 seconds.",
      "The dead interval will now be 15 seconds."
    ],
    "answers": [
      "The dead interval will now be 60 seconds."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.4.9\n\nCisco IOS automatically modifies the dead interval to four times the hello interval.",
    "gradable": true,
    "raw": "8. A network engineer has manually configured the hello interval to 15 seconds on an interface of a router that is running OSPFv2. By default, how will the dead interval on the interface be affected?\n\nThe dead interval will not change from the default value.\nThe dead interval will now be 30 seconds.\nThe dead interval will now be 60 seconds.\nThe dead interval will now be 15 seconds.\nExplanation: Topic 2.4.9\n\nCisco IOS automatically modifies the dead interval to four times the hello interval."
  },
  {
    "id": "Modules 1-2-9",
    "module": "Modules 1-2",
    "number": 9,
    "topic": "OSPF",
    "question": "9. Refer to the exhibit. A network administrator has configured the OSPF timers to the values that are shown in the graphic. What is the result of having those manually configured timers?",
    "choices": [
      "R1 automatically adjusts its own timers to match the R2 timers.",
      "The R1 dead timer expires between hello packets from R2.",
      "The hello timer on R2 expires every ten seconds.",
      "The neighbor adjacency has formed."
    ],
    "answers": [
      "The R1 dead timer expires between hello packets from R2."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.4.9\n\nThe dead timer (20 seconds) on R1 expires before the next hello packet from R2 (25 seconds).",
    "gradable": true,
    "raw": "9. Refer to the exhibit. A network administrator has configured the OSPF timers to the values that are shown in the graphic. What is the result of having those manually configured timers?\n\nR1 automatically adjusts its own timers to match the R2 timers.\nThe R1 dead timer expires between hello packets from R2.\nThe hello timer on R2 expires every ten seconds.\nThe neighbor adjacency has formed.\nExplanation: Topic 2.4.9\n\nThe dead timer (20 seconds) on R1 expires before the next hello packet from R2 (25 seconds)."
  },
  {
    "id": "Modules 1-2-10",
    "module": "Modules 1-2",
    "number": 10,
    "topic": "OSPF",
    "question": "10. To establish a neighbor adjacency two OSPF routers will exchange hello packets. Which two values in the hello packets must match on both routers? (Choose two.)",
    "choices": [
      "dead interval",
      "router priority",
      "list of neighbors",
      "router ID",
      "hello interval"
    ],
    "answers": [
      "dead interval",
      "hello interval"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.2.4\n\nThe hello and dead interval timers contained in a hello packet must be the same on neighboring routers in order to form an adjacency.",
    "gradable": true,
    "raw": "10. To establish a neighbor adjacency two OSPF routers will exchange hello packets. Which two values in the hello packets must match on both routers? (Choose two.)\n\ndead interval\nrouter priority\nlist of neighbors\nrouter ID\nhello interval\nExplanation: Topic 1.2.4\n\nThe hello and dead interval timers contained in a hello packet must be the same on neighboring routers in order to form an adjacency."
  },
  {
    "id": "Modules 1-2-11",
    "module": "Modules 1-2",
    "number": 11,
    "topic": "OSPF",
    "question": "11. What is the default router priority value for all Cisco OSPF routers?",
    "choices": [
      "0",
      "1",
      "10",
      "255"
    ],
    "answers": [
      "1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.2.4\n\nThe router priority value is used in a DR/BDR election. The default priority for all OSPF routers is 1 but it can be manually altered to any value 0 to 255.",
    "gradable": true,
    "raw": "11. What is the default router priority value for all Cisco OSPF routers?\n\n0\n1\n10\n255\nExplanation: Topic 1.2.4\n\nThe router priority value is used in a DR/BDR election. The default priority for all OSPF routers is 1 but it can be manually altered to any value 0 to 255."
  },
  {
    "id": "Modules 1-2-12",
    "module": "Modules 1-2",
    "number": 12,
    "topic": "OSPF",
    "question": "12. Which type of OSPFv2 packet contains an abbreviated list of the LSDB of a sending router and is used by receiving routers to check against the local LSDB?",
    "choices": [
      "database description",
      "link-state update",
      "link-state request",
      "link-state acknowledgment"
    ],
    "answers": [
      "database description"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.2.2\n\nThe database description (DBD) packet contains an abbreviated list of the LSDB sent by a neighboring router and is used by receiving routers to check against the local LSDB.",
    "gradable": true,
    "raw": "12. Which type of OSPFv2 packet contains an abbreviated list of the LSDB of a sending router and is used by receiving routers to check against the local LSDB?\n\ndatabase description\nlink-state update\nlink-state request\nlink-state acknowledgment\nExplanation: Topic 1.2.2\n\nThe database description (DBD) packet contains an abbreviated list of the LSDB sent by a neighboring router and is used by receiving routers to check against the local LSDB."
  },
  {
    "id": "Modules 1-2-13",
    "module": "Modules 1-2",
    "number": 13,
    "topic": "OSPF",
    "question": "13. In an OSPF network when are DR and BDR elections required?",
    "choices": [
      "when the two adjacent neighbors are interconnected over a point-to-point link",
      "when all the routers in an OSPF area cannot form adjacencies",
      "when the routers are interconnected over a common Ethernet network",
      "when the two adjacent neighbors are in two different networks"
    ],
    "answers": [
      "when the routers are interconnected over a common Ethernet network"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.3.3\n\nWhen the routers are interconnected over a common Ethernet network, then a designated router (DR) and a backup DR (BDR) must be elected.",
    "gradable": true,
    "raw": "13. In an OSPF network when are DR and BDR elections required?\n\nwhen the two adjacent neighbors are interconnected over a point-to-point link\nwhen all the routers in an OSPF area cannot form adjacencies\nwhen the routers are interconnected over a common Ethernet network\nwhen the two adjacent neighbors are in two different networks\nExplanation: Topic 1.3.3\n\nWhen the routers are interconnected over a common Ethernet network, then a designated router (DR) and a backup DR (BDR) must be elected."
  },
  {
    "id": "Modules 1-2-14",
    "module": "Modules 1-2",
    "number": 14,
    "topic": "OSPF",
    "question": "14. When an OSPF network is converged and no network topology change has been detected by a router, how often will LSU packets be sent to neighboring routers?",
    "choices": [
      "every 5 minutes",
      "every 10 minutes",
      "every 30 minutes",
      "every 60 minutes"
    ],
    "answers": [
      "every 30 minutes"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.3.4\n\nAfter all LSRs have been satisfied for a given router, the adjacent routers are considered synchronized and in a full state. Updates (LSUs) are sent to neighbors only under the following conditions:\n\nwhen a network topology change is detected (incremental updates)\nevery 30 minutes",
    "gradable": true,
    "raw": "14. When an OSPF network is converged and no network topology change has been detected by a router, how often will LSU packets be sent to neighboring routers?\n\nevery 5 minutes\nevery 10 minutes\nevery 30 minutes\nevery 60 minutes\nExplanation: Topic 1.3.4\n\nAfter all LSRs have been satisfied for a given router, the adjacent routers are considered synchronized and in a full state. Updates (LSUs) are sent to neighbors only under the following conditions:\n\nwhen a network topology change is detected (incremental updates)\nevery 30 minutes"
  },
  {
    "id": "Modules 1-2-15",
    "module": "Modules 1-2",
    "number": 15,
    "topic": "OSPF",
    "question": "15. What will an OSPF router prefer to use first as a router ID?",
    "choices": [
      "a loopback interface that is configured with the highest IP address on the router",
      "any IP address that is configured using the router-id command",
      "the highest active interface IP that is configured on the router",
      "the highest active interface that participates in the routing process because of a specifically configured network statement"
    ],
    "answers": [
      "any IP address that is configured using the router-id command"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.4\n\nThe first preference for an OSPF router ID is an explicitly configured 32-bit address. This address is not included in the routing table and is not defined by the network command. If a router ID that is configured through the router-id command is not available, OSPF routers next use the highest IP address available on a loopback interface, as loopbacks used as router IDs are also not routable addresses. Lacking either of these alternatives, an OSPF router will use the highest IP address from its active physical interfaces.",
    "gradable": true,
    "raw": "15. What will an OSPF router prefer to use first as a router ID?\n\na loopback interface that is configured with the highest IP address on the router\nany IP address that is configured using the router-id command\nthe highest active interface IP that is configured on the router\nthe highest active interface that participates in the routing process because of a specifically configured network statement\nExplanation: Topic 2.1.4\n\nThe first preference for an OSPF router ID is an explicitly configured 32-bit address. This address is not included in the routing table and is not defined by the network command. If a router ID that is configured through the router-id command is not available, OSPF routers next use the highest IP address available on a loopback interface, as loopbacks used as router IDs are also not routable addresses. Lacking either of these alternatives, an OSPF router will use the highest IP address from its active physical interfaces."
  },
  {
    "id": "Modules 1-2-16",
    "module": "Modules 1-2",
    "number": 16,
    "topic": "OSPF",
    "question": "16. What are the two purposes of an OSPF router ID? (Choose two.)",
    "choices": [
      "to uniquely identify the router within the OSPF domain",
      "to facilitate router participation in the election of the designated router",
      "to enable the SPF algorithm to determine the lowest cost path to remote networks",
      "to facilitate the establishment of network convergence",
      "to facilitate the transition of the OSPF neighbor state to Full"
    ],
    "answers": [
      "to uniquely identify the router within the OSPF domain",
      "to facilitate router participation in the election of the designated router"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.3\n\nOSPF router ID does not contribute to SPF algorithm calculations, nor does it facilitate the transition of the OSPF neighbor state to Full. Although the router ID is contained within OSPF messages when router adjacencies are being established, it has no bearing on the actual convergence process.",
    "gradable": true,
    "raw": "16. What are the two purposes of an OSPF router ID? (Choose two.)\n\nto uniquely identify the router within the OSPF domain\nto facilitate router participation in the election of the designated router\nto enable the SPF algorithm to determine the lowest cost path to remote networks\nto facilitate the establishment of network convergence\nto facilitate the transition of the OSPF neighbor state to Full\nExplanation: Topic 2.1.3\n\nOSPF router ID does not contribute to SPF algorithm calculations, nor does it facilitate the transition of the OSPF neighbor state to Full. Although the router ID is contained within OSPF messages when router adjacencies are being established, it has no bearing on the actual convergence process."
  },
  {
    "id": "Modules 1-2-17",
    "module": "Modules 1-2",
    "number": 17,
    "topic": "OSPF",
    "question": "17. Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?",
    "choices": [
      "10.0.0.1",
      "10.1.0.1",
      "192.168.1.100",
      "209.165.201.1"
    ],
    "answers": [
      "192.168.1.100"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.4\n\nIn OSPFv2, a Cisco router uses a three-tier method to derive its router ID. The first choice is the manually configured router ID with the router-id command. If the router ID is not manually configured, the router will choose the highest IPv4 address of the configured loopback interfaces. Finally if no loopback interfaces are configured, the router chooses the highest active IPv4 address of its physical interfaces.",
    "gradable": true,
    "raw": "17. Refer to the exhibit. If no router ID was manually configured, what would router Branch1 use as its OSPF router ID?\n\n10.0.0.1\n10.1.0.1\n192.168.1.100\n209.165.201.1\nExplanation: Topic 2.1.4\n\nIn OSPFv2, a Cisco router uses a three-tier method to derive its router ID. The first choice is the manually configured router ID with the router-id command. If the router ID is not manually configured, the router will choose the highest IPv4 address of the configured loopback interfaces. Finally if no loopback interfaces are configured, the router chooses the highest active IPv4 address of its physical interfaces."
  },
  {
    "id": "Modules 1-2-18",
    "module": "Modules 1-2",
    "number": 18,
    "topic": "OSPF",
    "question": "18. A network technician issues the following commands when configuring a router:",
    "choices": [
      "the OSPF process ID on R1",
      "the cost of the link to R1",
      "the autonomous system number to which R1 belongs",
      "the administrative distance that is manually assigned to R1",
      "the area number where R1 is located"
    ],
    "answers": [
      "the OSPF process ID on R1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.2\n\nThere is no autonomous system number to configure on OSPF. The area number is located at the end of the network statement. The cost of a link can be modified in the interface configuration mode. The process ID is local to the router.",
    "gradable": true,
    "raw": "18. A network technician issues the following commands when configuring a router:\n\nthe OSPF process ID on R1\nthe cost of the link to R1\nthe autonomous system number to which R1 belongs\nthe administrative distance that is manually assigned to R1\nthe area number where R1 is located\nExplanation: Topic 2.1.2\n\nThere is no autonomous system number to configure on OSPF. The area number is located at the end of the network statement. The cost of a link can be modified in the interface configuration mode. The process ID is local to the router."
  },
  {
    "id": "Modules 1-2-19",
    "module": "Modules 1-2",
    "number": 19,
    "topic": "OSPF",
    "question": "19. An OSPF router has three directly connected networks; 172.16.0.0/16, 172.16.1.0/16, and 172.16.2.0/16. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?",
    "choices": [
      "router(config-router)# network 172.16.1.0 0.0.255.255 area 0",
      "router(config-router)# network 172.16.0.0 0.0.15.255 area 0",
      "router(config-router)# network 172.16.1.0 255.255.255.0 area 0",
      "router(config-router)# network 172.16.1.0 0.0.0.0 area 0"
    ],
    "answers": [
      "router(config-router)# network 172.16.1.0 0.0.0.0 area 0"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.4\n\nTo advertise only the 172.16.1.0/16 network the wildcard mask used in the network command must match the first 16-bits exactly. To match bits exactly, a wildcard mask uses a binary zero. This means that the first 16-bits of the wildcard mask must be zero. The low order 16-bits can all be set to 1.",
    "gradable": true,
    "raw": "19. An OSPF router has three directly connected networks; 172.16.0.0/16, 172.16.1.0/16, and 172.16.2.0/16. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?\n\nrouter(config-router)# network 172.16.1.0 0.0.255.255 area 0\nrouter(config-router)# network 172.16.0.0 0.0.15.255 area 0\nrouter(config-router)# network 172.16.1.0 255.255.255.0 area 0\nrouter(config-router)# network 172.16.1.0 0.0.0.0 area 0\nExplanation: Topic 2.2.4\n\nTo advertise only the 172.16.1.0/16 network the wildcard mask used in the network command must match the first 16-bits exactly. To match bits exactly, a wildcard mask uses a binary zero. This means that the first 16-bits of the wildcard mask must be zero. The low order 16-bits can all be set to 1."
  },
  {
    "id": "Modules 1-2-20",
    "module": "Modules 1-2",
    "number": 20,
    "topic": "OSPF",
    "question": "20. Refer to the exhibit. Which three statements describe the results of the OSPF election process of the topology that is shown in the exhibit? (Choose three.)",
    "choices": [
      "R3 will be elected BDR.",
      "The R4 FastEthernet 0/0 priority is 128.",
      "The R4 router ID is 172.16.1.1.",
      "R1 will be elected BDR.",
      "The router ID on R2 is the loopback interface.",
      "R2 will be elected DR."
    ],
    "answers": [
      "R3 will be elected BDR.",
      "The R4 router ID is 172.16.1.1.",
      "R2 will be elected DR."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.3.6\n\nR2 will be elected DR because it has the highest priority of 255, all of the others have a priority of 1. R3 will be elected BDR because it has the numerically highest router-ID of 192.168.1.4. The R4 router-ID is 172.16.1.1 because it is the IPv4 address attached to the loopback 0 interface.",
    "gradable": true,
    "raw": "20. Refer to the exhibit. Which three statements describe the results of the OSPF election process of the topology that is shown in the exhibit? (Choose three.)\n\nR3 will be elected BDR.\nThe R4 FastEthernet 0/0 priority is 128.\nThe R4 router ID is 172.16.1.1.\nR1 will be elected BDR.\nThe router ID on R2 is the loopback interface.\nR2 will be elected DR.\nExplanation: Topic 2.3.6\n\nR2 will be elected DR because it has the highest priority of 255, all of the others have a priority of 1. R3 will be elected BDR because it has the numerically highest router-ID of 192.168.1.4. The R4 router-ID is 172.16.1.1 because it is the IPv4 address attached to the loopback 0 interface."
  },
  {
    "id": "Modules 1-2-21",
    "module": "Modules 1-2",
    "number": 21,
    "topic": "OSPF",
    "question": "21. Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?",
    "choices": [
      "Router R4 will become the DR and router R1 will become the BDR.",
      "Router R2 will become the DR and router R3 will become the BDR.",
      "Router R1 will become the DR and router R2 will become the BDR.",
      "Router R4 will become the DR and router R3 will become the BDR."
    ],
    "answers": [
      "Router R4 will become the DR and router R1 will become the BDR."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.3.6\n\nOSPF elections of a DR are based on the following in order of precedence:\n\nhighest pritority from 1 -255 (0 = never a DR)\nhighest router ID\nhighest IP address of a loopback or active interface in the absence of a manually configured router ID. Loopback IP addresses take higher precedence than other interfaces.\n\nIn this case routers R4 and R1 have the highest router priority. Between the two, R3 has the higher router ID. Therefore, R4 will become the DR and R1 will become the BDR.",
    "gradable": true,
    "raw": "21. Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?\n\nRouter R4 will become the DR and router R1 will become the BDR.\nRouter R2 will become the DR and router R3 will become the BDR.\nRouter R1 will become the DR and router R2 will become the BDR.\nRouter R4 will become the DR and router R3 will become the BDR.\nExplanation: Topic 2.3.6\n\nOSPF elections of a DR are based on the following in order of precedence:\n\nhighest pritority from 1 -255 (0 = never a DR)\nhighest router ID\nhighest IP address of a loopback or active interface in the absence of a manually configured router ID. Loopback IP addresses take higher precedence than other interfaces.\n\nIn this case routers R4 and R1 have the highest router priority. Between the two, R3 has the higher router ID. Therefore, R4 will become the DR and R1 will become the BDR."
  },
  {
    "id": "Modules 1-2-22",
    "module": "Modules 1-2",
    "number": 22,
    "topic": "OSPF",
    "question": "22. By default, what is the OSPF cost for any link with a bandwidth of 100 Mb/s or greater?",
    "choices": [
      "100000000",
      "10000",
      "1",
      "100"
    ],
    "answers": [
      "1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.4.1\n\nOSPF uses the formula: Cost = 100,000,000 / bandwidth. Because OSPF will only use integers as cost, any bandwidth of 100 Mb/s or greater will all equal a cost of 1.",
    "gradable": true,
    "raw": "22. By default, what is the OSPF cost for any link with a bandwidth of 100 Mb/s or greater?\n\n100000000\n10000\n1\n100\nExplanation: Topic 2.4.1\n\nOSPF uses the formula: Cost = 100,000,000 / bandwidth. Because OSPF will only use integers as cost, any bandwidth of 100 Mb/s or greater will all equal a cost of 1."
  },
  {
    "id": "Modules 1-2-23",
    "module": "Modules 1-2",
    "number": 23,
    "topic": "OSPF",
    "question": "23. Refer to the exhibit. What is the OSPF cost to reach the router A LAN 172.16.1.0/24 from B?",
    "choices": [
      "782",
      "74",
      "128",
      "65"
    ],
    "answers": [
      "65"
    ],
    "matching": null,
    "explanation": "",
    "gradable": true,
    "raw": "23. Refer to the exhibit. What is the OSPF cost to reach the router A LAN 172.16.1.0/24 from B?\n\n782\n74\n128\n65"
  },
  {
    "id": "Modules 1-2-24",
    "module": "Modules 1-2",
    "number": 24,
    "topic": "OSPF",
    "question": "24. Refer to the exhibit. On which router or routers would a default route be statically configured in a corporate environment that uses single area OSPF as the routing protocol?",
    "choices": [
      "R0-A",
      "ISP, R0-A, R0-B, and R0-C",
      "ISP",
      "R0-B and R0-C",
      "ISP and R0-A",
      "R0-A, R0-B, and R0-C"
    ],
    "answers": [
      "R0-A"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.5.1\n\nThe default route is applied to the router that connects to the Internet, or R0-A. R0-A then distributes that default route using the OSPF routing protocol.",
    "gradable": true,
    "raw": "24. Refer to the exhibit. On which router or routers would a default route be statically configured in a corporate environment that uses single area OSPF as the routing protocol?\n\nR0-A\nISP, R0-A, R0-B, and R0-C\nISP\nR0-B and R0-C\nISP and R0-A\nR0-A, R0-B, and R0-C\nExplanation: Topic 2.5.1\n\nThe default route is applied to the router that connects to the Internet, or R0-A. R0-A then distributes that default route using the OSPF routing protocol."
  },
  {
    "id": "Modules 1-2-25",
    "module": "Modules 1-2",
    "number": 25,
    "topic": "OSPF",
    "question": "25. What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?",
    "choices": [
      "ping",
      "show ip ospf neighbor",
      "show ip interface brief",
      "show ip protocols"
    ],
    "answers": [
      "show ip ospf neighbor"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.6.1\n\nWhile the show ip interface brief and ping commands can be used to determine if Layer 1, 2, and 3 connectivity exists, neither command can be used to determine if a particular OSPF or EIGRP-initiated relationship has been made. The show ip protocols command is useful in determining the routing parameters such as timers, router ID, and metric information associated with a specific routing protocol. The show ip ospf neighbor command shows if two adjacent routers have exchanged OSPF messages in order to form a neighbor relationship.",
    "gradable": true,
    "raw": "25. What command would be used to determine if a routing protocol-initiated relationship had been made with an adjacent router?\n\nping\nshow ip ospf neighbor\nshow ip interface brief\nshow ip protocols\nExplanation: Topic 2.6.1\n\nWhile the show ip interface brief and ping commands can be used to determine if Layer 1, 2, and 3 connectivity exists, neither command can be used to determine if a particular OSPF or EIGRP-initiated relationship has been made. The show ip protocols command is useful in determining the routing parameters such as timers, router ID, and metric information associated with a specific routing protocol. The show ip ospf neighbor command shows if two adjacent routers have exchanged OSPF messages in order to form a neighbor relationship."
  },
  {
    "id": "Modules 1-2-26",
    "module": "Modules 1-2",
    "number": 26,
    "topic": "OSPF",
    "question": "26. Refer to the exhibit. Which command did an administrator issue to produce this output?",
    "choices": [
      "R1# show ip ospf interface serial0/0/1",
      "R1# show ip route ospf",
      "R1# show ip ospf",
      "R1# show ip ospf neighbor"
    ],
    "answers": [
      "R1# show ip ospf interface serial0/0/1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.6.4",
    "gradable": true,
    "raw": "26. Refer to the exhibit. Which command did an administrator issue to produce this output?\n\nR1# show ip ospf interface serial0/0/1\nR1# show ip route ospf\nR1# show ip ospf\nR1# show ip ospf neighbor\nExplanation: Topic 2.6.4"
  },
  {
    "id": "Modules 1-2-27",
    "module": "Modules 1-2",
    "number": 27,
    "topic": "OSPF",
    "question": "27. Which command is used to verify that OSPF is enabled and also provides a list of the networks that are being advertised by the network?",
    "choices": [
      "show ip interface brief",
      "show ip ospf interface",
      "show ip protocols",
      "show ip route ospf"
    ],
    "answers": [
      "show ip protocols"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.6.2\n\nThe command show ip ospf interface verifies the active OSPF interfaces. The command show ip interface brief is used to check that the interfaces are operational. The command show ip route ospf displays the entries that are learned via OSPF in the routing table. The command show ip protocols checks that OSPF is enabled and lists the networks that are advertised.",
    "gradable": true,
    "raw": "27. Which command is used to verify that OSPF is enabled and also provides a list of the networks that are being advertised by the network?\n\nshow ip interface brief\nshow ip ospf interface\nshow ip protocols\nshow ip route ospf\nExplanation: Topic 2.6.2\n\nThe command show ip ospf interface verifies the active OSPF interfaces. The command show ip interface brief is used to check that the interfaces are operational. The command show ip route ospf displays the entries that are learned via OSPF in the routing table. The command show ip protocols checks that OSPF is enabled and lists the networks that are advertised."
  },
  {
    "id": "Modules 1-2-28",
    "module": "Modules 1-2",
    "number": 28,
    "topic": "OSPF",
    "question": "28. Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?",
    "choices": [
      "Interface Fa0/0 has not been activated for OSPFv2 on router R2.",
      "Interface Fa0/0 is configured as a passive-interface on router R2.",
      "Interface S0/0 is configured as a passive-interface on router R2.",
      "Interface s0/0 has not been activated for OSPFv2 on router R2."
    ],
    "answers": [
      "Interface Fa0/0 has not been activated for OSPFv2 on router R2."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.4\n\nIf a LAN network is not advertised using OSPFv2, a remote network will not be reachable. The output displays a successful neighbor adjacency between router R1 and R2 on the interface S0/0 of both routers.",
    "gradable": true,
    "raw": "28. Refer to the exhibit. A network administrator has configured OSPFv2 on the two Cisco routers but PC1 is unable to connect to PC2. What is the most likely problem?\n\nInterface Fa0/0 has not been activated for OSPFv2 on router R2.\nInterface Fa0/0 is configured as a passive-interface on router R2.\nInterface S0/0 is configured as a passive-interface on router R2.\nInterface s0/0 has not been activated for OSPFv2 on router R2.\nExplanation: Topic 2.2.4\n\nIf a LAN network is not advertised using OSPFv2, a remote network will not be reachable. The output displays a successful neighbor adjacency between router R1 and R2 on the interface S0/0 of both routers."
  },
  {
    "id": "Modules 1-2-29",
    "module": "Modules 1-2",
    "number": 29,
    "topic": "OSPF",
    "question": "29. What is the recommended Cisco best practice for configuring an OSPF-enabled router so that each router can be easily identified when troubleshooting routing issues?",
    "choices": [
      "Configure a value using the router-id command.",
      "Use the highest active interface IP address that is configured on the router.",
      "Use a loopback interface configured with the highest IP address on the router.",
      "Use the highest IP address assigned to an active interface participating in the routing process."
    ],
    "answers": [
      "Configure a value using the router-id command."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.4\n\nA Cisco router is assigned a router ID to uniquely identify it. It can be automatically assigned and take the value of the highest configured IP address on any interface, the value of a specifically-configured loopback address, or the value assigned (which is in the exact form of an IP address) using the router-id command. Cisco recommends using the router-id command.",
    "gradable": true,
    "raw": "29. What is the recommended Cisco best practice for configuring an OSPF-enabled router so that each router can be easily identified when troubleshooting routing issues?\n\nConfigure a value using the router-id command.\nUse the highest active interface IP address that is configured on the router.\nUse a loopback interface configured with the highest IP address on the router.\nUse the highest IP address assigned to an active interface participating in the routing process.\nExplanation: Topic 2.1.4\n\nA Cisco router is assigned a router ID to uniquely identify it. It can be automatically assigned and take the value of the highest configured IP address on any interface, the value of a specifically-configured loopback address, or the value assigned (which is in the exact form of an IP address) using the router-id command. Cisco recommends using the router-id command."
  },
  {
    "id": "Modules 1-2-30",
    "module": "Modules 1-2",
    "number": 30,
    "topic": "OSPF",
    "question": "30. Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?",
    "choices": [
      "load balancing equal-cost paths",
      "declaring a neighbor to be inaccessible",
      "choosing the best route",
      "executing the SPF algorithm"
    ],
    "answers": [
      "executing the SPF algorithm"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.3\n\nIn the link-state routing process, executing the SPF algorithm is the step where a router runs the Dijkstra Shortest Path First (SPF) algorithm against its Link-State Database (topology table). This calculation creates an SPF tree, which determines the best (shortest) path to every destination network based on cumulative link costs. Once this algorithm finishes, the best routes are then offered to the routing table.",
    "gradable": true,
    "raw": "30. Which step in the link-state routing process is described by a router running an algorithm to determine the best path to each destination?\n\nload balancing equal-cost paths\ndeclaring a neighbor to be inaccessible\nchoosing the best route\nexecuting the SPF algorithm\nExplanation: Topic 1.1.3\n\nIn the link-state routing process, executing the SPF algorithm is the step where a router runs the Dijkstra Shortest Path First (SPF) algorithm against its Link-State Database (topology table). This calculation creates an SPF tree, which determines the best (shortest) path to every destination network based on cumulative link costs. Once this algorithm finishes, the best routes are then offered to the routing table."
  },
  {
    "id": "Modules 1-2-31",
    "module": "Modules 1-2",
    "number": 31,
    "topic": "OSPF",
    "question": "31. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.223.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      "0.0.1.255",
      "0.0.7.255",
      "0.0.15.255",
      "0.0.31.255"
    ],
    "answers": [
      "0.0.1.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "31. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.223.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?\n\n0.0.1.255\n0.0.7.255\n0.0.15.255\n0.0.31.255\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-32",
    "module": "Modules 1-2",
    "number": 32,
    "topic": "OSPF",
    "question": "32. What is the format of the router ID on an OSPF-enabled router?",
    "choices": [
      "a unique router host name that is configured on the router",
      "a unique phrase with no more than 16 characters",
      "a 32-bit number formatted like an IPv4 address",
      "an 8-bit number with a decimal value between 0 and 255",
      "a character string with no space"
    ],
    "answers": [
      "a 32-bit number formatted like an IPv4 address"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.3\n\nA router ID is a 32-bit number formatted like an IPv4 address and assigned in order to uniquely identify a router among OSPF peers.",
    "gradable": true,
    "raw": "32. What is the format of the router ID on an OSPF-enabled router?\n\na unique router host name that is configured on the router\na unique phrase with no more than 16 characters\na 32-bit number formatted like an IPv4 address\nan 8-bit number with a decimal value between 0 and 255\na character string with no space\nExplanation: Topic 2.1.3\n\nA router ID is a 32-bit number formatted like an IPv4 address and assigned in order to uniquely identify a router among OSPF peers."
  },
  {
    "id": "Modules 1-2-33",
    "module": "Modules 1-2",
    "number": 33,
    "topic": "OSPF",
    "question": "33. Question as presented:",
    "choices": [],
    "answers": [],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.4",
    "gradable": false,
    "raw": "33. Question as presented:\n\n\nExplanation: Topic 1.1.4"
  },
  {
    "id": "Modules 1-2-34",
    "module": "Modules 1-2",
    "number": 34,
    "topic": "OSPF",
    "question": "34. After modifying the router ID on an OSPF router, what is the preferred method to make the new router ID effective?",
    "choices": [
      "HQ# copy running-config startup-config",
      "HQ# resume",
      "HQ# clear ip route *",
      "HQ# clear ip ospf process"
    ],
    "answers": [
      "HQ# clear ip ospf process"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.1.7\n\nTo modify a router-id on an OSPF-enabled router, it is necessary to reset the OSPF routing process by entering either the clear ip ospf process command or the reload command.",
    "gradable": true,
    "raw": "34. After modifying the router ID on an OSPF router, what is the preferred method to make the new router ID effective?\n\nHQ# copy running-config startup-config\nHQ# resume\nHQ# clear ip route *\nHQ# clear ip ospf process\nExplanation: Topic 2.1.7\n\nTo modify a router-id on an OSPF-enabled router, it is necessary to reset the OSPF routing process by entering either the clear ip ospf process command or the reload command."
  },
  {
    "id": "Modules 1-2-35",
    "module": "Modules 1-2",
    "number": 35,
    "topic": "OSPF",
    "question": "35. In an OSPFv2 configuration, what is the effect of entering the command network 192.168.1.1 0.0.0.0 area 0 ?",
    "choices": [
      "It allows all 192.168.1.0 networks to be advertised.",
      "It tells the router which interface to turn on for the OSPF routing process.",
      "It changes the router ID of the router to 192.168.1.1.",
      "It enables OSPF on all interfaces on the router."
    ],
    "answers": [
      "It tells the router which interface to turn on for the OSPF routing process."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.4\n\nEntering the command network 192.168.1.1 0.0.0.0 area 0 will turn on only the interface with that IP address for OSPF routing. It does not change the router ID. Instead, OSPF will use the network that is configured on that interface.",
    "gradable": true,
    "raw": "35. In an OSPFv2 configuration, what is the effect of entering the command network 192.168.1.1 0.0.0.0 area 0 ?\n\nIt allows all 192.168.1.0 networks to be advertised.\nIt tells the router which interface to turn on for the OSPF routing process.\nIt changes the router ID of the router to 192.168.1.1.\nIt enables OSPF on all interfaces on the router.\nExplanation: Topic 2.2.4\n\nEntering the command network 192.168.1.1 0.0.0.0 area 0 will turn on only the interface with that IP address for OSPF routing. It does not change the router ID. Instead, OSPF will use the network that is configured on that interface."
  },
  {
    "id": "Modules 1-2-36",
    "module": "Modules 1-2",
    "number": 36,
    "topic": "OSPF",
    "question": "36. What is the reason for a network engineer to alter the default reference bandwidth parameter when configuring OSPF?",
    "choices": [
      "to force that specific link to be used in the destination route",
      "to more accurately reflect the cost of links greater than 100 Mb/s",
      "to enable the link for OSPF routing",
      "to increase the speed of the link"
    ],
    "answers": [
      "to more accurately reflect the cost of links greater than 100 Mb/s"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.4.2\n\nBy default, Fast Ethernet, Gigabit, and 10 Gigabit Ethernet interfaces all have a cost of 1. Altering the default reference bandwidth alters the cost calculation, allowing each speed to be more accurately reflected in the cost.",
    "gradable": true,
    "raw": "36. What is the reason for a network engineer to alter the default reference bandwidth parameter when configuring OSPF?\n\nto force that specific link to be used in the destination route\nto more accurately reflect the cost of links greater than 100 Mb/s\nto enable the link for OSPF routing\nto increase the speed of the link\nExplanation: Topic 2.4.2\n\nBy default, Fast Ethernet, Gigabit, and 10 Gigabit Ethernet interfaces all have a cost of 1. Altering the default reference bandwidth alters the cost calculation, allowing each speed to be more accurately reflected in the cost."
  },
  {
    "id": "Modules 1-2-37",
    "module": "Modules 1-2",
    "number": 37,
    "topic": "OSPF",
    "question": "37. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
    "choices": [
      "Issue the clear ip ospf process command.",
      "Change the subnet mask of interface FastEthernet 0/0 to 255.255.255.0.",
      "Remove the passive interface command from interface FastEthernet 0/0.",
      "Add the network 10.0.1.0 0.0.0.255 area 0 command to the OSPF process."
    ],
    "answers": [
      "Change the subnet mask of interface FastEthernet 0/0 to 255.255.255.0."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.6.1\n\nEach interface on the link connecting the OSPF routers must be in the same subnet for an adjacency to be established. The IP address subnet mask on FastEthernet interface 0/0 must be changed to 255.255.255.0. The FastEthernet interface 0/0 is not passive. The 10.0.1.0/24 network is only connected to Router2 so should not be advertised by Router1. The clear ip ospf process command will start the OPSF process on Router1 but will not cause an adjacency to be established if the subnet mask mismatch on the connecting interfaces still exists.",
    "gradable": true,
    "raw": "37. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.\n\nIssue the clear ip ospf process command.\nChange the subnet mask of interface FastEthernet 0/0 to 255.255.255.0.\nRemove the passive interface command from interface FastEthernet 0/0.\nAdd the network 10.0.1.0 0.0.0.255 area 0 command to the OSPF process.\nExplanation: Topic 2.6.1\n\nEach interface on the link connecting the OSPF routers must be in the same subnet for an adjacency to be established. The IP address subnet mask on FastEthernet interface 0/0 must be changed to 255.255.255.0. The FastEthernet interface 0/0 is not passive. The 10.0.1.0/24 network is only connected to Router2 so should not be advertised by Router1. The clear ip ospf process command will start the OPSF process on Router1 but will not cause an adjacency to be established if the subnet mask mismatch on the connecting interfaces still exists."
  },
  {
    "id": "Modules 1-2-38",
    "module": "Modules 1-2",
    "number": 38,
    "topic": "OSPF",
    "question": "38. Match the description to the term. (Not all options are used.)",
    "choices": [],
    "answers": [],
    "matching": {
      "targets": [
        "This is the algorithm used by OSPF.",
        "This is where the details of the neighboring routers can be found.",
        "All the routers are in the backbone area.",
        "This is where you can find the topology table."
      ],
      "options": [
        "Shortest Path First",
        "Adjacency database",
        "Single-area OSPF",
        "Link-state database"
      ],
      "answers": {
        "This is the algorithm used by OSPF.": "Shortest Path First",
        "This is where the details of the neighboring routers can be found.": "Adjacency database",
        "All the routers are in the backbone area.": "Single-area OSPF",
        "This is where you can find the topology table.": "Link-state database"
      }
    },
    "explanation": "Explanation: Topic 1.1.2\n\nDUAL is the algorithm used by EIGRP. In multiarea OSPF, OSPF is implemented using multiple areas, and all of them must be connected to the backbone area.",
    "gradable": true,
    "raw": "38. Match the description to the term. (Not all options are used.)\n\n\nExplanation: Topic 1.1.2\n\nDUAL is the algorithm used by EIGRP. In multiarea OSPF, OSPF is implemented using multiple areas, and all of them must be connected to the backbone area."
  },
  {
    "id": "Modules 1-2-39",
    "module": "Modules 1-2",
    "number": 39,
    "topic": "OSPF",
    "question": "39. What is a benefit of multiarea OSPF routing?",
    "choices": [
      "Topology changes in one area do not cause SPF recalculations in other areas.",
      "Routers in all areas share the same link-state database and have a complete picture of the entire network.",
      "A backbone area is not required.",
      "Automatic route summarization occurs by default between areas."
    ],
    "answers": [
      "Topology changes in one area do not cause SPF recalculations in other areas."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.5\n\nWith multiarea OSPF, only routers within an area share the same link-state database. Changes to the network topology in one area do not impact other areas, which reduces the number of SPF algorithm calculations and the of link-state databases.",
    "gradable": true,
    "raw": "39. What is a benefit of multiarea OSPF routing?\n\nTopology changes in one area do not cause SPF recalculations in other areas.\nRouters in all areas share the same link-state database and have a complete picture of the entire network.\nA backbone area is not required.\nAutomatic route summarization occurs by default between areas.\nExplanation: Topic 1.1.5\n\nWith multiarea OSPF, only routers within an area share the same link-state database. Changes to the network topology in one area do not impact other areas, which reduces the number of SPF algorithm calculations and the of link-state databases."
  },
  {
    "id": "Modules 1-2-40",
    "module": "Modules 1-2",
    "number": 40,
    "topic": "OSPF",
    "question": "40. Match the OSPF state with the order in which it occurs. (Not all options are used.)",
    "choices": [],
    "answers": [],
    "matching": {
      "targets": [
        "second state",
        "seventh state",
        "fifth state",
        "first state",
        "fourth state",
        "third state",
        "sixth state"
      ],
      "options": [
        "Init state",
        "Full state",
        "Exchange state",
        "Down state",
        "Exstart state",
        "Two-way state",
        "Loading state"
      ],
      "answers": {
        "second state": "Init state",
        "seventh state": "Full state",
        "fifth state": "Exchange state",
        "first state": "Down state",
        "fourth state": "Exstart state",
        "third state": "Two-way state",
        "sixth state": "Loading state"
      }
    },
    "explanation": "",
    "gradable": true,
    "raw": "40. Match the OSPF state with the order in which it occurs. (Not all options are used.)"
  },
  {
    "id": "Modules 1-2-41",
    "module": "Modules 1-2",
    "number": 41,
    "topic": "OSPF",
    "question": "41. What indicates to a link-state router that a neighbor is unreachable?",
    "choices": [
      "if the router no longer receives hello packets",
      "if the router receives an update with a hop count of 16",
      "if the router receives an LSP with previously learned information",
      "if the router no longer receives routing updates"
    ],
    "answers": [
      "if the router no longer receives hello packets"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.4.7\n\nOSPF routers send hello packets to monitor the state of a neighbor. When a router stops receiving hello packets from a neighbor, that neighbor is considered unreachable and the adjacency is broken.",
    "gradable": true,
    "raw": "41. What indicates to a link-state router that a neighbor is unreachable?\n\nif the router no longer receives hello packets\nif the router receives an update with a hop count of 16\nif the router receives an LSP with previously learned information\nif the router no longer receives routing updates\nExplanation: Topic 2.4.7\n\nOSPF routers send hello packets to monitor the state of a neighbor. When a router stops receiving hello packets from a neighbor, that neighbor is considered unreachable and the adjacency is broken."
  },
  {
    "id": "Modules 1-2-42",
    "module": "Modules 1-2",
    "number": 42,
    "topic": "OSPF",
    "question": "42. Which three OSPF states are involved when two routers are forming an adjacency? (Choose three.)",
    "choices": [
      "Exchange",
      "Init",
      "ExStart",
      "Two-way",
      "Loading",
      "Down"
    ],
    "answers": [
      "Init",
      "Two-way",
      "Down"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.3.4\n\nOSPF operation progresses through 7 states for establishing neighboring router adjacency, exchanging routing information, calculating the best routes, and reaching convergence. The Down, Init, and Two-way states are involved in the phase of neighboring router adjacency establishment.",
    "gradable": true,
    "raw": "42. Which three OSPF states are involved when two routers are forming an adjacency? (Choose three.)\n\nExchange\nInit\nExStart\nTwo-way\nLoading\nDown\nExplanation: Topic 1.3.4\n\nOSPF operation progresses through 7 states for establishing neighboring router adjacency, exchanging routing information, calculating the best routes, and reaching convergence. The Down, Init, and Two-way states are involved in the phase of neighboring router adjacency establishment."
  },
  {
    "id": "Modules 1-2-43",
    "module": "Modules 1-2",
    "number": 43,
    "topic": "OSPF",
    "question": "43. Refer to the exhibit. Suppose that routers B, C, and D have a default priority, and router A has a priority 0. Which conclusion can be drawn from the DR/BDR election process?",
    "choices": [
      "If the priority of router C is changed to 255, then it will become the DR.",
      "Router A will become the DR and router D will become the BDR.",
      "If the DR fails, the new DR will be router B.",
      "If a new router with a higher priority is added to this network, it will become the DR."
    ],
    "answers": [
      "If the DR fails, the new DR will be router B."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.3.7\n\nIf the priority is set to 0, the router is not capable of becoming the DR, so router A cannot be the DR. OSPF DR and BDR elections are not preemptive. If a new router with a higher priority or higher router ID is added to the network after the DR and BDR election, the newly added router does not take over the DR or the BDR role.",
    "gradable": true,
    "raw": "43. Refer to the exhibit. Suppose that routers B, C, and D have a default priority, and router A has a priority 0. Which conclusion can be drawn from the DR/BDR election process?\n\nIf the priority of router C is changed to 255, then it will become the DR.\nRouter A will become the DR and router D will become the BDR.\nIf the DR fails, the new DR will be router B.\nIf a new router with a higher priority is added to this network, it will become the DR.\nExplanation: Topic 2.3.7\n\nIf the priority is set to 0, the router is not capable of becoming the DR, so router A cannot be the DR. OSPF DR and BDR elections are not preemptive. If a new router with a higher priority or higher router ID is added to the network after the DR and BDR election, the newly added router does not take over the DR or the BDR role."
  },
  {
    "id": "Modules 1-2-44",
    "module": "Modules 1-2",
    "number": 44,
    "topic": "OSPF",
    "question": "44. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.102.0.0 255.255.255.128. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      "0.0.31.255",
      "0.0.0.63",
      "0.0.63.255",
      "0.0.0.127"
    ],
    "answers": [
      "0.0.0.127"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "44. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.102.0.0 255.255.255.128. What wildcard mask would the administrator use in the OSPF network statement?\n\n0.0.31.255\n0.0.0.63\n0.0.63.255\n0.0.0.127\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-45",
    "module": "Modules 1-2",
    "number": 45,
    "topic": "OSPF",
    "question": "45. Which command will a network engineer issue to verify the configured hello and dead timer intervals on a point-to-point WAN link between two routers that are running OSPFv2?",
    "choices": [
      "show ipv6 ospf interface serial 0/0/0",
      "show ip ospf neighbor",
      "show ip ospf interface fastethernet 0/1",
      "show ip ospf interface serial 0/0/0"
    ],
    "answers": [
      "show ip ospf interface serial 0/0/0"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.4.8\n\nThe show ip ospf interface serial 0/0/0 command will display the configured hello and dead timer intervals on a point-to-point serial WAN link between two OSPFv2 routers. The show ipv6 ospf interface serial 0/0/0 command will display the configured hello and dead timer intervals on a point-to-point serial link between two OSPFv3 routers. The show ip ospf interface fastethernet 0/1 command will display the configured hello and dead timer intervals on a multiaccess link between two (or more) OSPFv2 routers. The show ip ospf neighbor command will display the dead interval elapsed time since the last hello message was received, but does not show the configured value of the timer.",
    "gradable": true,
    "raw": "45. Which command will a network engineer issue to verify the configured hello and dead timer intervals on a point-to-point WAN link between two routers that are running OSPFv2?\n\nshow ipv6 ospf interface serial 0/0/0\nshow ip ospf neighbor\nshow ip ospf interface fastethernet 0/1\nshow ip ospf interface serial 0/0/0\nExplanation: Topic 2.4.8\n\nThe show ip ospf interface serial 0/0/0 command will display the configured hello and dead timer intervals on a point-to-point serial WAN link between two OSPFv2 routers. The show ipv6 ospf interface serial 0/0/0 command will display the configured hello and dead timer intervals on a point-to-point serial link between two OSPFv3 routers. The show ip ospf interface fastethernet 0/1 command will display the configured hello and dead timer intervals on a multiaccess link between two (or more) OSPFv2 routers. The show ip ospf neighbor command will display the dead interval elapsed time since the last hello message was received, but does not show the configured value of the timer."
  },
  {
    "id": "Modules 1-2-46",
    "module": "Modules 1-2",
    "number": 46,
    "topic": "OSPF",
    "question": "46. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 128.107.0.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      "0.0.63.255",
      "0.0.0.63",
      "0.0.0.3",
      "0.0.0.7"
    ],
    "answers": [
      "0.0.0.63"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "46. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 128.107.0.0 255.255.255.192. What wildcard mask would the administrator use in the OSPF network statement?\n\n0.0.63.255\n0.0.0.63\n0.0.0.3\n0.0.0.7\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-47",
    "module": "Modules 1-2",
    "number": 47,
    "topic": "OSPF",
    "question": "47. Match each OSPF packet type to how it is used by a router. (Not all options are used.)",
    "choices": [],
    "answers": [],
    "matching": {
      "targets": [
        "link-state request packet",
        "hello packet",
        "database description packet",
        "link-state update packet"
      ],
      "options": [
        "query another router for additional information",
        "establish and maintain adjacencies",
        "compare local topology to that sent by another router",
        "advertise new information"
      ],
      "answers": {
        "link-state request packet": "query another router for additional information",
        "hello packet": "establish and maintain adjacencies",
        "database description packet": "compare local topology to that sent by another router",
        "link-state update packet": "advertise new information"
      }
    },
    "explanation": "Explanation: Topic 1.2.2",
    "gradable": true,
    "raw": "47. Match each OSPF packet type to how it is used by a router. (Not all options are used.)\n\n\nExplanation: Topic 1.2.2"
  },
  {
    "id": "Modules 1-2-48",
    "module": "Modules 1-2",
    "number": 48,
    "topic": "OSPF",
    "question": "48. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.181.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      ".0.63.255",
      "0.0.15.255",
      "0.0.1.255",
      "0.0.31.255"
    ],
    "answers": [
      "0.0.1.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "48. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 192.168.181.0 255.255.254.0. What wildcard mask would the administrator use in the OSPF network statement?\n\n.0.63.255\n0.0.15.255\n0.0.1.255\n0.0.31.255\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-49",
    "module": "Modules 1-2",
    "number": 49,
    "topic": "OSPF",
    "question": "49. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 198.19.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      "0.0.63.255",
      "0.0.3.255",
      "0.0.31.255",
      "0.0.0.255"
    ],
    "answers": [
      "0.0.3.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "49. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 198.19.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?\n\n0.0.63.255\n0.0.3.255\n0.0.31.255\n0.0.0.255\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-50",
    "module": "Modules 1-2",
    "number": 50,
    "topic": "OSPF",
    "question": "50. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 128.107.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      "0.0.3.255",
      "0.0.0.7",
      "0.0.0.3",
      "0.0.63.255"
    ],
    "answers": [
      "0.0.3.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "50. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 128.107.0.0 255.255.252.0. What wildcard mask would the administrator use in the OSPF network statement?\n\n0.0.3.255\n0.0.0.7\n0.0.0.3\n0.0.63.255\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-51",
    "module": "Modules 1-2",
    "number": 51,
    "topic": "OSPF",
    "question": "51. Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?",
    "choices": [
      "building the topology table",
      "selecting the router ID",
      "exchanging link-state advertisements",
      "injecting the default route"
    ],
    "answers": [
      "exchanging link-state advertisements"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.3\n\nAccording to the link-state routing process, once neighbor adjacencies are established, routers begin exchanging link-state advertisements (LSAs). During this step, each router floods information regarding the state and cost of its directly connected links to its neighbors. These neighbors then immediately forward the information to their own neighbors until all routers in the OSPF area possess identical link-state information.",
    "gradable": true,
    "raw": "51. Which step in the link-state routing process is described by a router flooding link-state and cost information about each directly connected link?\n\nbuilding the topology table\nselecting the router ID\nexchanging link-state advertisements\ninjecting the default route\nExplanation: Topic 1.1.3\n\nAccording to the link-state routing process, once neighbor adjacencies are established, routers begin exchanging link-state advertisements (LSAs). During this step, each router floods information regarding the state and cost of its directly connected links to its neighbors. These neighbors then immediately forward the information to their own neighbors until all routers in the OSPF area possess identical link-state information."
  },
  {
    "id": "Modules 1-2-52",
    "module": "Modules 1-2",
    "number": 52,
    "topic": "OSPF",
    "question": "52. Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?",
    "choices": [
      "electing the designated router",
      "establishing neighbor adjacencies",
      "injecting the default route",
      "exchanging link-state advertisements"
    ],
    "answers": [
      "establishing neighbor adjacencies"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.3",
    "gradable": true,
    "raw": "52. Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?\n\nelecting the designated router\nestablishing neighbor adjacencies\ninjecting the default route\nexchanging link-state advertisements\nExplanation: Topic 1.1.3"
  },
  {
    "id": "Modules 1-2-53",
    "module": "Modules 1-2",
    "number": 53,
    "topic": "OSPF",
    "question": "53. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.100.0.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?",
    "choices": [
      "0.0.0.31",
      "0.0.0.255",
      "0.0.0.63",
      "0.0.0.127"
    ],
    "answers": [
      "0.0.0.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.2",
    "gradable": true,
    "raw": "53. An administrator is configuring single-area OSPF on a router. One of the networks that must be advertised is 64.100.0.0 255.255.255.0. What wildcard mask would the administrator use in the OSPF network statement?\n\n0.0.0.31\n0.0.0.255\n0.0.0.63\n0.0.0.127\nExplanation: Topic 2.2.2"
  },
  {
    "id": "Modules 1-2-54",
    "module": "Modules 1-2",
    "number": 54,
    "topic": "OSPF",
    "question": "54. Which step in the link-state routing process is described by a router inserting best paths into the routing table?",
    "choices": [
      "declaring a neighbor to be inaccessible",
      "executing the SPF algorithm",
      "load balancing equal-cost paths",
      "choosing the best route"
    ],
    "answers": [
      "choosing the best route"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.3\nThis is the final step in the generic link-state routing process. After the SPF algorithm creates the SPF tree, the router identifies the shortest paths to each destination and offers them to the IP routing table. These best paths are then inserted into the routing table unless a route to the same network with a lower administrative distance exists.",
    "gradable": true,
    "raw": "54. Which step in the link-state routing process is described by a router inserting best paths into the routing table?\n\ndeclaring a neighbor to be inaccessible\nexecuting the SPF algorithm\nload balancing equal-cost paths\nchoosing the best route\nExplanation: Topic 1.1.3\nThis is the final step in the generic link-state routing process. After the SPF algorithm creates the SPF tree, the router identifies the shortest paths to each destination and offers them to the IP routing table. These best paths are then inserted into the routing table unless a route to the same network with a lower administrative distance exists."
  },
  {
    "id": "Modules 1-2-55",
    "module": "Modules 1-2",
    "number": 55,
    "topic": "OSPF",
    "question": "55. What type of address is 64.101.198.197?",
    "choices": [
      "public",
      "private"
    ],
    "answers": [
      "public"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.5.1",
    "gradable": true,
    "raw": "55. What type of address is 64.101.198.197?\n\npublic\nprivate\nExplanation: Topic 2.5.1"
  },
  {
    "id": "Modules 1-2-56",
    "module": "Modules 1-2",
    "number": 56,
    "topic": "OSPF",
    "question": "56. An OSPF router has three directly connected networks; 172.16.0.0/24, 172.16.1.0/24, and 172.16.2.0/24. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?",
    "choices": [
      "router(config-router)# network 172.16.1.0 0.0.255.255 area 0",
      "router(config-router)# network 172.16.0.0 0.0.15.255 area 0",
      "router(config-router)# network 172.16.1.0 0.0.0.255 area 0",
      "router(config-router)# network 172.16.1.0 0.0.0.0 area 0"
    ],
    "answers": [
      "router(config-router)# network 172.16.1.0 0.0.0.255 area 0"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 2.2.4\n\nTo advertise only the 172.16.1.0/24 network the wildcard mask used in the network command must match the first 24-bits exactly. To match bits exactly, a wildcard mask uses a binary zero. This means that the first 24-bits of the wildcard mask must be zero. The low order 8-bits can all be set to 1.",
    "gradable": true,
    "raw": "56. An OSPF router has three directly connected networks; 172.16.0.0/24, 172.16.1.0/24, and 172.16.2.0/24. Which OSPF network command would advertise only the 172.16.1.0 network to neighbors?\n\nrouter(config-router)# network 172.16.1.0 0.0.255.255 area 0\nrouter(config-router)# network 172.16.0.0 0.0.15.255 area 0\nrouter(config-router)# network 172.16.1.0 0.0.0.255 area 0\nrouter(config-router)# network 172.16.1.0 0.0.0.0 area 0\nExplanation: Topic 2.2.4\n\nTo advertise only the 172.16.1.0/24 network the wildcard mask used in the network command must match the first 24-bits exactly. To match bits exactly, a wildcard mask uses a binary zero. This means that the first 24-bits of the wildcard mask must be zero. The low order 8-bits can all be set to 1."
  },
  {
    "id": "Modules 1-2-57",
    "module": "Modules 1-2",
    "number": 57,
    "topic": "OSPF",
    "question": "57. Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?",
    "choices": [
      "selecting the router ID",
      "declaring a neighbor to be inaccessible",
      "executing the SPF algorithm",
      "building the topology table"
    ],
    "answers": [
      "building the topology table"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 1.1.3\nIn the generic link-state routing process, the third step is to build the Link-State Database (LSDB). After Link-State Advertisements (LSAs) are received from adjacent neighbors, OSPF-enabled routers use that information to build the topology table (LSDB), which contains information about all other routers in the network area and represents the overall network topology. Once this database is synchronized, the router can then execute the SPF algorithm to find the best paths.\n\n\t\tPost navigation\n\t\t← Previous Article CCNA 3 v7 Exam Answers - Enterprise Networking, Security, and Automation v7.0 (ENSA)Next Article → CCNA 3 v7 Modules 3 - 5: Network Security Exam Answers",
    "gradable": true,
    "raw": "57. Which step in the link-state routing process is described by a router building a link-state database based on received LSAs?\n\nselecting the router ID\ndeclaring a neighbor to be inaccessible\nexecuting the SPF algorithm\nbuilding the topology table\nExplanation: Topic 1.1.3\nIn the generic link-state routing process, the third step is to build the Link-State Database (LSDB). After Link-State Advertisements (LSAs) are received from adjacent neighbors, OSPF-enabled routers use that information to build the topology table (LSDB), which contains information about all other routers in the network area and represents the overall network topology. Once this database is synchronized, the router can then execute the SPF algorithm to find the best paths.\n\n\t\tPost navigation\n\t\t← Previous Article CCNA 3 v7 Exam Answers - Enterprise Networking, Security, and Automation v7.0 (ENSA)Next Article → CCNA 3 v7 Modules 3 - 5: Network Security Exam Answers"
  },
  {
    "id": "Modules 3-5-1",
    "module": "Modules 3-5",
    "number": 1,
    "topic": "Security",
    "question": "1. The IT department is reporting that a company web server is receiving an abnormally high number of web page requests from different locations simultaneously. Which type of security attack is occurring?",
    "choices": [
      "adware",
      "DDoS",
      "phishing",
      "social engineering",
      "spyware"
    ],
    "answers": [
      "DDoS"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.5.9",
    "gradable": true,
    "raw": "1. The IT department is reporting that a company web server is receiving an abnormally high number of web page requests from different locations simultaneously. Which type of security attack is occurring?\n\nadware\nDDoS\nphishing\nsocial engineering\nspyware\nExplanation: Topic 3.5.9"
  },
  {
    "id": "Modules 3-5-2",
    "module": "Modules 3-5",
    "number": 2,
    "topic": "Security",
    "question": "2. What causes a buffer overflow?",
    "choices": [
      "launching a security countermeasure to mitigate a Trojan horse",
      "downloading and installing too many software updates at one time",
      "attempting to write more data to a memory location than that location can hold",
      "sending too much information to two or more interfaces of the same device, thereby causing dropped packets",
      "sending repeated connections such as Telnet to a particular device, thus denying other data sources"
    ],
    "answers": [
      "attempting to write more data to a memory location than that location can hold"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.5.5",
    "gradable": true,
    "raw": "2. What causes a buffer overflow?\n\nlaunching a security countermeasure to mitigate a Trojan horse\ndownloading and installing too many software updates at one time\nattempting to write more data to a memory location than that location can hold\nsending too much information to two or more interfaces of the same device, thereby causing dropped packets\nsending repeated connections such as Telnet to a particular device, thus denying other data sources\nExplanation: Topic 3.5.5"
  },
  {
    "id": "Modules 3-5-3",
    "module": "Modules 3-5",
    "number": 3,
    "topic": "Security",
    "question": "3. Which objective of secure communications is achieved by encrypting data?",
    "choices": [
      "authentication",
      "availability",
      "confidentiality",
      "integrity"
    ],
    "answers": [
      "confidentiality"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.10.2\n\nWhen data is encrypted, it is scrambled to keep the data private and confidential so that only authorized recipients can read the message. A hash function is another way of providing confidentiality.",
    "gradable": true,
    "raw": "3. Which objective of secure communications is achieved by encrypting data?\n\nauthentication\navailability\nconfidentiality\nintegrity\nExplanation: Topic 3.10.2\n\nWhen data is encrypted, it is scrambled to keep the data private and confidential so that only authorized recipients can read the message. A hash function is another way of providing confidentiality."
  },
  {
    "id": "Modules 3-5-4",
    "module": "Modules 3-5",
    "number": 4,
    "topic": "Security",
    "question": "4. What type of malware has the primary objective of spreading across the network?",
    "choices": [
      "worm",
      "virus",
      "Trojan horse",
      "botnet"
    ],
    "answers": [
      "worm"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.4.3",
    "gradable": true,
    "raw": "4. What type of malware has the primary objective of spreading across the network?\n\nworm\nvirus\nTrojan horse\nbotnet\nExplanation: Topic 3.4.3"
  },
  {
    "id": "Modules 3-5-5",
    "module": "Modules 3-5",
    "number": 5,
    "topic": "Security",
    "question": "5. What commonly motivates cybercriminals to attack networks as compared to hactivists or state-sponsored hackers?",
    "choices": [
      "financial gain",
      "fame seeking",
      "status among peers",
      "political reasons"
    ],
    "answers": [
      "financial gain"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.2.3\n\nCybercriminals are commonly motivated by money. Hackers are known to hack for status. Cyberterrorists are motivated to commit cybercrimes for religious or political reasons.",
    "gradable": true,
    "raw": "5. What commonly motivates cybercriminals to attack networks as compared to hactivists or state-sponsored hackers?\n\nfinancial gain\nfame seeking\nstatus among peers\npolitical reasons\nExplanation: Topic 3.2.3\n\nCybercriminals are commonly motivated by money. Hackers are known to hack for status. Cyberterrorists are motivated to commit cybercrimes for religious or political reasons."
  },
  {
    "id": "Modules 3-5-6",
    "module": "Modules 3-5",
    "number": 6,
    "topic": "Security",
    "question": "6. Which type of hacker is motivated to protest against political and social issues?",
    "choices": [
      "hacktivist",
      "cybercriminal",
      "script kiddie",
      "vulnerability broker"
    ],
    "answers": [
      "hacktivist"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.2.4\n\nHackers are categorized by motivating factors. Hacktivists are motivated by protesting political and social issues.",
    "gradable": true,
    "raw": "6. Which type of hacker is motivated to protest against political and social issues?\n\nhacktivist\ncybercriminal\nscript kiddie\nvulnerability broker\nExplanation: Topic 3.2.4\n\nHackers are categorized by motivating factors. Hacktivists are motivated by protesting political and social issues."
  },
  {
    "id": "Modules 3-5-7",
    "module": "Modules 3-5",
    "number": 7,
    "topic": "Security",
    "question": "7. What is a ping sweep?",
    "choices": [
      "a query and response protocol that identifies information about a domain, including the addresses that are assigned to that domain.",
      "a scanning technique that examines a range of TCP or UDP port numbers on a host to detect listening services.",
      "a software application that enables the capture of all network packets that are sent across a LAN.",
      "a network scanning technique that indicates the live hosts in a range of IP addresses."
    ],
    "answers": [
      "a network scanning technique that indicates the live hosts in a range of IP addresses."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.5.3\n\nA ping sweep is a tool that is used during a reconnaissance attack. Other tools that might be used during this type of attack include a ping sweep, port scan, or Internet information query. A reconnaissance attack is used to gather information about a particular network, usually in preparation for another type of network attack.",
    "gradable": true,
    "raw": "7. What is a ping sweep?\n\na query and response protocol that identifies information about a domain, including the addresses that are assigned to that domain.\na scanning technique that examines a range of TCP or UDP port numbers on a host to detect listening services.\na software application that enables the capture of all network packets that are sent across a LAN.\na network scanning technique that indicates the live hosts in a range of IP addresses.\nExplanation: Topic 3.5.3\n\nA ping sweep is a tool that is used during a reconnaissance attack. Other tools that might be used during this type of attack include a ping sweep, port scan, or Internet information query. A reconnaissance attack is used to gather information about a particular network, usually in preparation for another type of network attack."
  },
  {
    "id": "Modules 3-5-8",
    "module": "Modules 3-5",
    "number": 8,
    "topic": "Security",
    "question": "8. In what type of attack is a cybercriminal attempting to prevent legitimate users from accessing network services?",
    "choices": [
      "address spoofing",
      "MITM",
      "session hijacking",
      "DoS"
    ],
    "answers": [
      "DoS"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.5.9\n\nIn a DoS or denial-of-service attack, the goal of the attacker is to prevent legitimate users from accessing network services.",
    "gradable": true,
    "raw": "8. In what type of attack is a cybercriminal attempting to prevent legitimate users from accessing network services?\n\naddress spoofing\nMITM\nsession hijacking\nDoS\nExplanation: Topic 3.5.9\n\nIn a DoS or denial-of-service attack, the goal of the attacker is to prevent legitimate users from accessing network services."
  },
  {
    "id": "Modules 3-5-9",
    "module": "Modules 3-5",
    "number": 9,
    "topic": "Security",
    "question": "9. Which requirement of secure communications is ensured by the implementation of MD5 or SHA hash generating algorithms?",
    "choices": [
      "nonrepudiation",
      "authentication",
      "integrity",
      "confidentiality"
    ],
    "answers": [
      "integrity"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.10.2\n\nIntegrity is ensured by implementing either MD5 or SHA hash generating algorithms. Many modern networks ensure authentication with protocols, such as HMAC. Data confidentiality is ensured through symmetric encryption algorithms, including DES, 3DES, and AES. Data confidentiality can also be ensured using asymmetric algorithms, including RSA and PKI.",
    "gradable": true,
    "raw": "9. Which requirement of secure communications is ensured by the implementation of MD5 or SHA hash generating algorithms?\n\nnonrepudiation\nauthentication\nintegrity\nconfidentiality\nExplanation: Topic 3.10.2\n\nIntegrity is ensured by implementing either MD5 or SHA hash generating algorithms. Many modern networks ensure authentication with protocols, such as HMAC. Data confidentiality is ensured through symmetric encryption algorithms, including DES, 3DES, and AES. Data confidentiality can also be ensured using asymmetric algorithms, including RSA and PKI."
  },
  {
    "id": "Modules 3-5-10",
    "module": "Modules 3-5",
    "number": 10,
    "topic": "Security",
    "question": "10. If an asymmetric algorithm uses a public key to encrypt data, what is used to decrypt it?",
    "choices": [
      "a digital certificate",
      "a different public key",
      "a private key",
      "DH"
    ],
    "answers": [
      "a private key"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.10.8\n\nWhen an asymmetric algorithm is used, public and private keys are used for the encryption. Either key can be used for encryption, but the complementary matched key must be used for the decryption. For example if the public key is used for encryption, then the private key must be used for the decryption.",
    "gradable": true,
    "raw": "10. If an asymmetric algorithm uses a public key to encrypt data, what is used to decrypt it?\n\na digital certificate\na different public key\na private key\nDH\nExplanation: Topic 3.10.8\n\nWhen an asymmetric algorithm is used, public and private keys are used for the encryption. Either key can be used for encryption, but the complementary matched key must be used for the decryption. For example if the public key is used for encryption, then the private key must be used for the decryption."
  },
  {
    "id": "Modules 3-5-11",
    "module": "Modules 3-5",
    "number": 11,
    "topic": "Security",
    "question": "11. Refer to the exhibit. Which two ACLs would permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface? (Choose two.)",
    "choices": [
      "access-list 1 permit 192.168.10.0 0.0.0.127",
      "access-list 2 permit host 192.168.10.9\n\naccess-list 2 permit host 192.168.10.69",
      "access-list 5 permit 192.168.10.0 0.0.0.63\n\naccess-list 5 permit 192.168.10.64 0.0.0.63",
      "access-list 3 permit 192.168.10.128 0.0.0.63",
      "access-list 4 permit 192.168.10.0 0.0.0.255"
    ],
    "answers": [
      "access-list 1 permit 192.168.10.0 0.0.0.127",
      "access-list 5 permit 192.168.10.0 0.0.0.63\n\naccess-list 5 permit 192.168.10.64 0.0.0.63"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.2\n\nThe permit 192.168.10.0 0.0.0.127 command ignores bit positions 1 through 7, which means that addresses 192.168.10.0 through 192.168.10.127 are allowed through. The two ACEs of permit 192.168.10.0 0.0.0.63 and permit 192.168.10.64 0.0.0.63 allow the same address range through the router.",
    "gradable": true,
    "raw": "11. Refer to the exhibit. Which two ACLs would permit only the two LAN networks attached to R1 to access the network that connects to R2 G0/1 interface? (Choose two.)\n\naccess-list 1 permit 192.168.10.0 0.0.0.127\naccess-list 2 permit host 192.168.10.9\n\naccess-list 2 permit host 192.168.10.69\naccess-list 5 permit 192.168.10.0 0.0.0.63\n\naccess-list 5 permit 192.168.10.64 0.0.0.63\naccess-list 3 permit 192.168.10.128 0.0.0.63\naccess-list 4 permit 192.168.10.0 0.0.0.255\nExplanation: Topic 4.2.2\n\nThe permit 192.168.10.0 0.0.0.127 command ignores bit positions 1 through 7, which means that addresses 192.168.10.0 through 192.168.10.127 are allowed through. The two ACEs of permit 192.168.10.0 0.0.0.63 and permit 192.168.10.64 0.0.0.63 allow the same address range through the router."
  },
  {
    "id": "Modules 3-5-12",
    "module": "Modules 3-5",
    "number": 12,
    "topic": "Security",
    "question": "12. Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)",
    "choices": [
      "destination UDP port number",
      "computer type",
      "destination MAC address",
      "ICMP message type",
      "source TCP hello address"
    ],
    "answers": [
      "destination UDP port number",
      "ICMP message type"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.1\n\nExtended access lists commonly filter on source and destination IPv4 addresses and TCP or UDP port numbers. Additional filtering can be provided for protocol types.",
    "gradable": true,
    "raw": "12. Which two packet filters could a network administrator use on an IPv4 extended ACL? (Choose two.)\n\ndestination UDP port number\ncomputer type\ndestination MAC address\nICMP message type\nsource TCP hello address\nExplanation: Topic 5.4.1\n\nExtended access lists commonly filter on source and destination IPv4 addresses and TCP or UDP port numbers. Additional filtering can be provided for protocol types."
  },
  {
    "id": "Modules 3-5-13",
    "module": "Modules 3-5",
    "number": 13,
    "topic": "Security",
    "question": "13. What type of ACL offers greater flexibility and control over network access?",
    "choices": [
      "numbered standard",
      "named standard",
      "extended",
      "flexible"
    ],
    "answers": [
      "extended"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.1\n\nThe two types of ACLs are standard and extended. Both types can be named or numbered, but extended ACLs offer greater flexibility.",
    "gradable": true,
    "raw": "13. What type of ACL offers greater flexibility and control over network access?\n\nnumbered standard\nnamed standard\nextended\nflexible\nExplanation: Topic 5.4.1\n\nThe two types of ACLs are standard and extended. Both types can be named or numbered, but extended ACLs offer greater flexibility."
  },
  {
    "id": "Modules 3-5-14",
    "module": "Modules 3-5",
    "number": 14,
    "topic": "Security",
    "question": "14. What is the quickest way to remove a single ACE from a named ACL?",
    "choices": [
      "Use the no keyword and the sequence number of the ACE to be removed.",
      "Copy the ACL into a text editor, remove the ACE, then copy the ACL back into the router.",
      "Create a new ACL with a different number and apply the new ACL to the router interface.",
      "Use the no access-list command to remove the entire ACL, then recreate it without the ACE."
    ],
    "answers": [
      "Use the no keyword and the sequence number of the ACE to be removed."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.2.3\n\nNamed ACL ACEs can be removed using the no command followed by the sequence number.",
    "gradable": true,
    "raw": "14. What is the quickest way to remove a single ACE from a named ACL?\n\nUse the no keyword and the sequence number of the ACE to be removed.\nCopy the ACL into a text editor, remove the ACE, then copy the ACL back into the router.\nCreate a new ACL with a different number and apply the new ACL to the router interface.\nUse the no access-list command to remove the entire ACL, then recreate it without the ACE.\nExplanation: Topic 5.2.3\n\nNamed ACL ACEs can be removed using the no command followed by the sequence number."
  },
  {
    "id": "Modules 3-5-15",
    "module": "Modules 3-5",
    "number": 15,
    "topic": "Security",
    "question": "15. Refer to the exhibit. A network administrator is configuring a standard IPv4 ACL. What is the effect after the command no access-list 10 is entered?",
    "choices": [
      "ACL 10 is removed from both the running configuration and the interface Fa0/1.",
      "ACL 10 is removed from the running configuration.",
      "ACL 10 is disabled on Fa0/1.",
      "ACL 10 will be disabled and removed after R1 restarts."
    ],
    "answers": [
      "ACL 10 is removed from the running configuration."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.1.4\n\nThe R1(config)# no access-list <access-list number> command removes the ACL from the running-config immediately. However, to disable an ACL on an interface, the command R1(config-if)# no ip access-group should be entered.",
    "gradable": true,
    "raw": "15. Refer to the exhibit. A network administrator is configuring a standard IPv4 ACL. What is the effect after the command no access-list 10 is entered?\n\nACL 10 is removed from both the running configuration and the interface Fa0/1.\nACL 10 is removed from the running configuration.\nACL 10 is disabled on Fa0/1.\nACL 10 will be disabled and removed after R1 restarts.\nExplanation: Topic 5.1.4\n\nThe R1(config)# no access-list <access-list number> command removes the ACL from the running-config immediately. However, to disable an ACL on an interface, the command R1(config-if)# no ip access-group should be entered."
  },
  {
    "id": "Modules 3-5-16",
    "module": "Modules 3-5",
    "number": 16,
    "topic": "Security",
    "question": "16. Refer to the exhibit. A network administrator has configured ACL 9 as shown. Users on the 172.31.1.0 /24 network cannot forward traffic through router CiscoVille. What is the most likely cause of the traffic failure?",
    "choices": [
      "The established keyword is not specified.",
      "The sequence of the ACEs is incorrect.",
      "The port number for the traffic has not been identified with the eq keyword.",
      "The permit statement specifies an incorrect wildcard mask."
    ],
    "answers": [
      "The sequence of the ACEs is incorrect."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.1.3\n\nWhen verifying an ACL, the statements are always listed in a sequential order. Even though there is an explicit permit for the traffic that is sourced from network 172.31.1.0 /24, it is being denied due to the previously implemented ACE of CiscoVille(config)# access-list 9 deny 172.31.0.0 0.0.255.255. The sequence of the ACEs must be modified to permit the specific traffic that is sourced from network 172.31.1.0 /24 and then to deny 172.31.0.0 /16.",
    "gradable": true,
    "raw": "16. Refer to the exhibit. A network administrator has configured ACL 9 as shown. Users on the 172.31.1.0 /24 network cannot forward traffic through router CiscoVille. What is the most likely cause of the traffic failure?\n\nThe established keyword is not specified.\nThe sequence of the ACEs is incorrect.\nThe port number for the traffic has not been identified with the eq keyword.\nThe permit statement specifies an incorrect wildcard mask.\nExplanation: Topic 4.1.3\n\nWhen verifying an ACL, the statements are always listed in a sequential order. Even though there is an explicit permit for the traffic that is sourced from network 172.31.1.0 /24, it is being denied due to the previously implemented ACE of CiscoVille(config)# access-list 9 deny 172.31.0.0 0.0.255.255. The sequence of the ACEs must be modified to permit the specific traffic that is sourced from network 172.31.1.0 /24 and then to deny 172.31.0.0 /16."
  },
  {
    "id": "Modules 3-5-17",
    "module": "Modules 3-5",
    "number": 17,
    "topic": "Security",
    "question": "17. A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)",
    "choices": [
      "Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.0",
      "Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.255",
      "Router1(config)# access-list 10 permit 192.168.15.23 255.255.255.255",
      "Router1(config)# access-list 10 permit host 192.168.15.23",
      "Router1(config)# access-list 10 permit 192.168.15.23 255.255.255.0"
    ],
    "answers": [
      "Router1(config)# access-list 10 permit 192.168.15.23 0.0.0.0",
      "Router1(config)# access-list 10 permit host 192.168.15.23"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.4\n\nTo permit or deny one specific IP address, either the wildcard mask 0.0.0.0 (used after the IP address) or the wildcard mask keyword host (used before the IP address) can be used.",
    "gradable": true,
    "raw": "17. A network administrator needs to configure a standard ACL so that only the workstation of the administrator with the IP address 192.168.15.23 can access the virtual terminal of the main router. Which two configuration commands can achieve the task? (Choose two.)\n\nRouter1(config)# access-list 10 permit 192.168.15.23 0.0.0.0\nRouter1(config)# access-list 10 permit 192.168.15.23 0.0.0.255\nRouter1(config)# access-list 10 permit 192.168.15.23 255.255.255.255\nRouter1(config)# access-list 10 permit host 192.168.15.23\nRouter1(config)# access-list 10 permit 192.168.15.23 255.255.255.0\nExplanation: Topic 4.2.4\n\nTo permit or deny one specific IP address, either the wildcard mask 0.0.0.0 (used after the IP address) or the wildcard mask keyword host (used before the IP address) can be used."
  },
  {
    "id": "Modules 3-5-18",
    "module": "Modules 3-5",
    "number": 18,
    "topic": "Security",
    "question": "18. Refer to the exhibit. Which command would be used in a standard ACL to allow only devices on the network attached to R2 G0/0 interface to access the networks attached to R1?",
    "choices": [
      "access-list 1 permit 192.168.10.128 0.0.0.63",
      "access-list 1 permit 192.168.10.0 0.0.0.255",
      "access-list 1 permit 192.168.10.96 0.0.0.31",
      "access-list 1 permit 192.168.10.0 0.0.0.63"
    ],
    "answers": [
      "access-list 1 permit 192.168.10.96 0.0.0.31"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.3\n\nStandard access lists only filter on the source IP address. In the design, the packets would be coming from the 192.168.10.96/27 network (the R2 G0/0 network). The correct ACL is access-list 1 permit 192.168.10.96 0.0.0.31.",
    "gradable": true,
    "raw": "18. Refer to the exhibit. Which command would be used in a standard ACL to allow only devices on the network attached to R2 G0/0 interface to access the networks attached to R1?\n\naccess-list 1 permit 192.168.10.128 0.0.0.63\naccess-list 1 permit 192.168.10.0 0.0.0.255\naccess-list 1 permit 192.168.10.96 0.0.0.31\naccess-list 1 permit 192.168.10.0 0.0.0.63\nExplanation: Topic 4.2.3\n\nStandard access lists only filter on the source IP address. In the design, the packets would be coming from the 192.168.10.96/27 network (the R2 G0/0 network). The correct ACL is access-list 1 permit 192.168.10.96 0.0.0.31."
  },
  {
    "id": "Modules 3-5-19",
    "module": "Modules 3-5",
    "number": 19,
    "topic": "Security",
    "question": "19. A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)",
    "choices": [
      "Router(config)# access-list 95 deny 172.16.0.0 255.255.0.0",
      "Router(config)# access-list 95 permit any",
      "Router(config)# access-list 95 host 172.16.0.0",
      "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255",
      "Router(config)# access-list 95 172.16.0.0 255.255.255.255",
      "Router(config)# access-list 95 deny any"
    ],
    "answers": [
      "Router(config)# access-list 95 permit any",
      "Router(config)# access-list 95 deny 172.16.0.0 0.0.255.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.1.2\n\nTo deny traffic from the 172.16.0.0/16 network, the access-list 95 deny 172.16.0.0 0.0.255.255 command is used. To permit all other traffic, the access-list 95 permit any statement is added.",
    "gradable": true,
    "raw": "19. A network administrator is writing a standard ACL that will deny any traffic from the 172.16.0.0/16 network, but permit all other traffic. Which two commands should be used? (Choose two.)\n\nRouter(config)# access-list 95 deny 172.16.0.0 255.255.0.0\nRouter(config)# access-list 95 permit any\nRouter(config)# access-list 95 host 172.16.0.0\nRouter(config)# access-list 95 deny 172.16.0.0 0.0.255.255\nRouter(config)# access-list 95 172.16.0.0 255.255.255.255\nRouter(config)# access-list 95 deny any\nExplanation: Topic 5.1.2\n\nTo deny traffic from the 172.16.0.0/16 network, the access-list 95 deny 172.16.0.0 0.0.255.255 command is used. To permit all other traffic, the access-list 95 permit any statement is added."
  },
  {
    "id": "Modules 3-5-20",
    "module": "Modules 3-5",
    "number": 20,
    "topic": "Security",
    "question": "20. Refer to the exhibit. An ACL was configured on R1 with the intention of denying traffic from subnet 172.16.4.0/24 into subnet 172.16.3.0/24. All other traffic into subnet 172.16.3.0/24 should be permitted. This standard ACL was then applied outbound on interface Fa0/0. Which conclusion can be drawn from this configuration?",
    "choices": [
      "The ACL should be applied outbound on all interfaces of R1.",
      "The ACL should be applied to the FastEthernet 0/0 interface of R1 inbound to accomplish the requirements.",
      "All traffic will be blocked, not just traffic from the 172.16.4.0/24 subnet.",
      "Only traffic from the 172.16.4.0/24 subnet is blocked, and all other traffic is allowed.",
      "An extended ACL must be used in this situation."
    ],
    "answers": [
      "All traffic will be blocked, not just traffic from the 172.16.4.0/24 subnet."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.1.3\n\nBecause of the implicit deny at the end of all ACLs, the access-list 1 permit any command must be included to ensure that only traffic from the 172.16.4.0/24 subnet is blocked and that all other traffic is allowed.",
    "gradable": true,
    "raw": "20. Refer to the exhibit. An ACL was configured on R1 with the intention of denying traffic from subnet 172.16.4.0/24 into subnet 172.16.3.0/24. All other traffic into subnet 172.16.3.0/24 should be permitted. This standard ACL was then applied outbound on interface Fa0/0. Which conclusion can be drawn from this configuration?\n\nThe ACL should be applied outbound on all interfaces of R1.\nThe ACL should be applied to the FastEthernet 0/0 interface of R1 inbound to accomplish the requirements.\nAll traffic will be blocked, not just traffic from the 172.16.4.0/24 subnet.\nOnly traffic from the 172.16.4.0/24 subnet is blocked, and all other traffic is allowed.\nAn extended ACL must be used in this situation.\nExplanation: Topic 4.1.3\n\nBecause of the implicit deny at the end of all ACLs, the access-list 1 permit any command must be included to ensure that only traffic from the 172.16.4.0/24 subnet is blocked and that all other traffic is allowed."
  },
  {
    "id": "Modules 3-5-21",
    "module": "Modules 3-5",
    "number": 21,
    "topic": "Security",
    "question": "21. Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?",
    "choices": [
      "30 deny 172.23.16.0 0.0.15.255",
      "15 deny 172.23.16.0 0.0.15.255",
      "5 deny 172.23.16.0 0.0.15.255",
      "5 deny 172.23.16.0 0.0.255.255"
    ],
    "answers": [
      "5 deny 172.23.16.0 0.0.15.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.1.3\n\nThe only filtering criteria specified for a standard access list is the source IPv4 address. The wild card mask is written to identify what parts of the address to match, with a 0 bit, and what parts of the address should be ignored, which a 1 bit. The router will parse the ACE entries from lowest sequence number to highest. If an ACE must be added to an existing access list, the sequence number should be specified so that the ACE is in the correct place during the ACL evaluation process.",
    "gradable": true,
    "raw": "21. Refer to the exhibit. A network administrator needs to add an ACE to the TRAFFIC-CONTROL ACL that will deny IP traffic from the subnet 172.23.16.0/20. Which ACE will meet this requirement?\n\n30 deny 172.23.16.0 0.0.15.255\n15 deny 172.23.16.0 0.0.15.255\n5 deny 172.23.16.0 0.0.15.255\n5 deny 172.23.16.0 0.0.255.255\nExplanation: Topic 4.1.3\n\nThe only filtering criteria specified for a standard access list is the source IPv4 address. The wild card mask is written to identify what parts of the address to match, with a 0 bit, and what parts of the address should be ignored, which a 1 bit. The router will parse the ACE entries from lowest sequence number to highest. If an ACE must be added to an existing access list, the sequence number should be specified so that the ACE is in the correct place during the ACL evaluation process."
  },
  {
    "id": "Modules 3-5-22",
    "module": "Modules 3-5",
    "number": 22,
    "topic": "Security",
    "question": "22. Refer to the exhibit. A network administrator configures an ACL on the router. Which statement describes the result of the configuration?",
    "choices": [
      "An SSH connection is allowed from a workstation with IP 172.16.45.16 to a device with IP 192.168.25.18.",
      "An SSH connection is allowed from a workstation with IP 192.168.25.18 to a device with IP 172.16.45.16.",
      "A Telnet connection is allowed from a workstation with IP 192.168.25.18 to a device with IP 172.16.45.16.",
      "A Telnet connection is allowed from a workstation with IP 172.16.45.16 to a device with IP 192.168.25.18."
    ],
    "answers": [
      "An SSH connection is allowed from a workstation with IP 192.168.25.18 to a device with IP 172.16.45.16."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.1\n\nIn an extended ACL, the first address is the source IP address and the second one is the destination IP address. TCP port number 22 is a well-known port number reserved for SSH connections. Telnet connections use TCP port number 23.",
    "gradable": true,
    "raw": "22. Refer to the exhibit. A network administrator configures an ACL on the router. Which statement describes the result of the configuration?\n\nAn SSH connection is allowed from a workstation with IP 172.16.45.16 to a device with IP 192.168.25.18.\nAn SSH connection is allowed from a workstation with IP 192.168.25.18 to a device with IP 172.16.45.16.\nA Telnet connection is allowed from a workstation with IP 192.168.25.18 to a device with IP 172.16.45.16.\nA Telnet connection is allowed from a workstation with IP 172.16.45.16 to a device with IP 192.168.25.18.\nExplanation: Topic 5.4.1\n\nIn an extended ACL, the first address is the source IP address and the second one is the destination IP address. TCP port number 22 is a well-known port number reserved for SSH connections. Telnet connections use TCP port number 23."
  },
  {
    "id": "Modules 3-5-23",
    "module": "Modules 3-5",
    "number": 23,
    "topic": "Security",
    "question": "23. Refer to the exhibit. What can be determined from this output?",
    "choices": [
      "The ACL is missing the deny ip any any ACE.",
      "The ACL is only monitoring traffic destined for 10.23.77.101 from three specific hosts.",
      "Because there are no matches for line 10, the ACL is not working.",
      "The router has not had any Telnet packets from 10.35.80.22 that are destined for 10.23.77.101."
    ],
    "answers": [
      "The router has not had any Telnet packets from 10.35.80.22 that are destined for 10.23.77.101."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.2.5\n\nACL entry 10 in MyACL matches any Telnet packets between host 10.35.80.22 and 10.23.77.101. No matches have occurred on this ACE as evidenced by the lack of a \"(xxx matches)\" ACE. The deny ip any any ACE is not required because there is an implicit deny ACE added to every access control list. When no matches exist for an ACL, it only means that no traffic has matched the conditions that exist for that particular line. The ACL is monitoring traffic that matches three specific hosts going to very specific destination devices. All other traffic is not permitted by the implicit deny ip any any ACE.",
    "gradable": true,
    "raw": "23. Refer to the exhibit. What can be determined from this output?\n\nThe ACL is missing the deny ip any any ACE.\nThe ACL is only monitoring traffic destined for 10.23.77.101 from three specific hosts.\nBecause there are no matches for line 10, the ACL is not working.\nThe router has not had any Telnet packets from 10.35.80.22 that are destined for 10.23.77.101.\nExplanation: Topic 5.2.5\n\nACL entry 10 in MyACL matches any Telnet packets between host 10.35.80.22 and 10.23.77.101. No matches have occurred on this ACE as evidenced by the lack of a \"(xxx matches)\" ACE. The deny ip any any ACE is not required because there is an implicit deny ACE added to every access control list. When no matches exist for an ACL, it only means that no traffic has matched the conditions that exist for that particular line. The ACL is monitoring traffic that matches three specific hosts going to very specific destination devices. All other traffic is not permitted by the implicit deny ip any any ACE."
  },
  {
    "id": "Modules 3-5-24",
    "module": "Modules 3-5",
    "number": 24,
    "topic": "Security",
    "question": "24. Refer to the exhibit. A network administrator wants to permit only host 192.168.1.1 /24 to be able to access the server 192.168.2.1 /24. Which three commands will achieve this using best ACL placement practices? (Choose three.)",
    "choices": [
      "R2(config)# interface fastethernet 0/1",
      "R2(config-if)# ip access-group 101 out",
      "R2(config)# access-list 101 permit ip 192.168.1.0 255.255.255.0 192.168.2.0 255.255.255.0",
      "R2(config-if)# ip access-group 101 in",
      "R2(config)# access-list 101 permit ip any any",
      "R2(config)# interface fastethernet 0/0",
      "R2(config)# access-list 101 permit ip host 192.168.1.1 host 192.168.2.1"
    ],
    "answers": [
      "R2(config-if)# ip access-group 101 in",
      "R2(config)# interface fastethernet 0/0",
      "R2(config)# access-list 101 permit ip host 192.168.1.1 host 192.168.2.1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.3\n\nAn extended ACL is placed as close to the source of the traffic as possible. In this case.it is placed in an inbound direction on interface fa0/0 on R2 for traffic entering the router from host with the IP address192.168.1.1 bound for the server with the IP address192.168.2.1.",
    "gradable": true,
    "raw": "24. Refer to the exhibit. A network administrator wants to permit only host 192.168.1.1 /24 to be able to access the server 192.168.2.1 /24. Which three commands will achieve this using best ACL placement practices? (Choose three.)\n\nR2(config)# interface fastethernet 0/1\nR2(config-if)# ip access-group 101 out\nR2(config)# access-list 101 permit ip 192.168.1.0 255.255.255.0 192.168.2.0 255.255.255.0\nR2(config-if)# ip access-group 101 in\nR2(config)# access-list 101 permit ip any any\nR2(config)# interface fastethernet 0/0\nR2(config)# access-list 101 permit ip host 192.168.1.1 host 192.168.2.1\nExplanation: Topic 4.4.3\n\nAn extended ACL is placed as close to the source of the traffic as possible. In this case.it is placed in an inbound direction on interface fa0/0 on R2 for traffic entering the router from host with the IP address192.168.1.1 bound for the server with the IP address192.168.2.1."
  },
  {
    "id": "Modules 3-5-25",
    "module": "Modules 3-5",
    "number": 25,
    "topic": "Security",
    "question": "25. Consider the following access list.",
    "choices": [
      "Only Layer 3 connections are allowed to be made from the router to any other network device.",
      "Devices on the 192.168.10.0/24 network are not allowed to reply to any ping requests.",
      "Devices on the 192.168.10.0/24 network can sucessfully ping devices on the 192.168.11.0 network.",
      "A Telnet or SSH session is allowed from any device on the 192.168.10.0 into the router with this access list assigned.",
      "Devices on the 192.168.10.0/24 network are allowed to reply to any ping requests.",
      "Only the network device assigned the IP address 192.168.10.1 is allowed to access the router."
    ],
    "answers": [
      "A Telnet or SSH session is allowed from any device on the 192.168.10.0 into the router with this access list assigned.",
      "Devices on the 192.168.10.0/24 network are allowed to reply to any ping requests."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.1\n\nThe first ACE allows the 192.168.10.1 device to do any TCP/IP-based transactions with any other destination. The second ACE stops devices on the 192.168.10.0/24 network from issuing any pings to any other location. Everything else is permitted by the third ACE. Therefore, a Telnet/SSH session or ping reply is allowed from a device on the 192.168.10.0/24 network.",
    "gradable": true,
    "raw": "25. Consider the following access list.\n\nOnly Layer 3 connections are allowed to be made from the router to any other network device.\nDevices on the 192.168.10.0/24 network are not allowed to reply to any ping requests.\nDevices on the 192.168.10.0/24 network can sucessfully ping devices on the 192.168.11.0 network.\nA Telnet or SSH session is allowed from any device on the 192.168.10.0 into the router with this access list assigned.\nDevices on the 192.168.10.0/24 network are allowed to reply to any ping requests.\nOnly the network device assigned the IP address 192.168.10.1 is allowed to access the router.\nExplanation: Topic 5.4.1\n\nThe first ACE allows the 192.168.10.1 device to do any TCP/IP-based transactions with any other destination. The second ACE stops devices on the 192.168.10.0/24 network from issuing any pings to any other location. Everything else is permitted by the third ACE. Therefore, a Telnet/SSH session or ping reply is allowed from a device on the 192.168.10.0/24 network."
  },
  {
    "id": "Modules 3-5-26",
    "module": "Modules 3-5",
    "number": 26,
    "topic": "Security",
    "question": "26. Refer to the exhibit. The named ACL \"Managers\" already exists on the router. What will happen when the network administrator issues the commands that are shown in the exhibit?",
    "choices": [
      "The commands are added at the end of the existing Managers ACL.",
      "The commands overwrite the existing Managers ACL.",
      "The commands are added at the beginning of the existing Managers ACL.",
      "The network administrator receives an error that states that the ACL already exists."
    ],
    "answers": [
      "The commands are added at the end of the existing Managers ACL."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.2.4",
    "gradable": true,
    "raw": "26. Refer to the exhibit. The named ACL \"Managers\" already exists on the router. What will happen when the network administrator issues the commands that are shown in the exhibit?\n\nThe commands are added at the end of the existing Managers ACL.\nThe commands overwrite the existing Managers ACL.\nThe commands are added at the beginning of the existing Managers ACL.\nThe network administrator receives an error that states that the ACL already exists.\nExplanation: Topic 5.2.4"
  },
  {
    "id": "Modules 3-5-27",
    "module": "Modules 3-5",
    "number": 27,
    "topic": "Security",
    "question": "27. In which TCP attack is the cybercriminal attempting to overwhelm a target host with half-open TCP connections?",
    "choices": [
      "port scan attack",
      "SYN flood attack",
      "session hijacking attack",
      "reset attack"
    ],
    "answers": [
      "SYN flood attack"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.7.3\n\nIn a TCP SYN flood attack, the attacker sends to the target host a continuous flood of TCP SYN session requests with a spoofed source IP address. The target host responds with a TCP-SYN-ACK to each of the SYN session requests and waits for a TCP ACK that will never arrive. Eventually the target is overwhelmed with half-open TCP connections.",
    "gradable": true,
    "raw": "27. In which TCP attack is the cybercriminal attempting to overwhelm a target host with half-open TCP connections?\n\nport scan attack\nSYN flood attack\nsession hijacking attack\nreset attack\nExplanation: Topic 3.7.3\n\nIn a TCP SYN flood attack, the attacker sends to the target host a continuous flood of TCP SYN session requests with a spoofed source IP address. The target host responds with a TCP-SYN-ACK to each of the SYN session requests and waits for a TCP ACK that will never arrive. Eventually the target is overwhelmed with half-open TCP connections."
  },
  {
    "id": "Modules 3-5-28",
    "module": "Modules 3-5",
    "number": 28,
    "topic": "Security",
    "question": "28. Which protocol is attacked when a cybercriminal provides an invalid gateway in order to create a man-in-the-middle attack?",
    "choices": [
      "DHCP",
      "DNS",
      "ICMP",
      "HTTP or HTTPS"
    ],
    "answers": [
      "DHCP"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.8.7\n\nA cybercriminal could set up a rogue DHCP server that provides one or more of the following:\n\nWrong default gateway that is used to create a man-in-the-middle attack and allow the attacker to intercept data\nWrong DNS server that results in the user being sent to a malicious website\nInvalid default gateway IP address that results in a denial of service attack on the DHCP client",
    "gradable": true,
    "raw": "28. Which protocol is attacked when a cybercriminal provides an invalid gateway in order to create a man-in-the-middle attack?\n\nDHCP\nDNS\nICMP\nHTTP or HTTPS\nExplanation: Topic 3.8.7\n\nA cybercriminal could set up a rogue DHCP server that provides one or more of the following:\n\nWrong default gateway that is used to create a man-in-the-middle attack and allow the attacker to intercept data\nWrong DNS server that results in the user being sent to a malicious website\nInvalid default gateway IP address that results in a denial of service attack on the DHCP client"
  },
  {
    "id": "Modules 3-5-29",
    "module": "Modules 3-5",
    "number": 29,
    "topic": "Security",
    "question": "29. Refer to the exhibit. An administrator has configured a standard ACL on R1 and applied it to interface serial 0/0/0 in the outbound direction. What happens to traffic leaving interface serial 0/0/0 that does not match the configured ACL statements?",
    "choices": [
      "The traffic is dropped.",
      "The source IP address is checked and, if a match is not found, traffic is routed out interface serial 0/0/1.",
      "The resulting action is determined by the destination IP address.",
      "The resulting action is determined by the destination IP address and port number."
    ],
    "answers": [
      "The traffic is dropped."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.1.3\n\nAny traffic that does not match one of the statements in an ACL has the implicit deny applied to it, which means the traffic is dropped.",
    "gradable": true,
    "raw": "29. Refer to the exhibit. An administrator has configured a standard ACL on R1 and applied it to interface serial 0/0/0 in the outbound direction. What happens to traffic leaving interface serial 0/0/0 that does not match the configured ACL statements?\n\nThe traffic is dropped.\nThe source IP address is checked and, if a match is not found, traffic is routed out interface serial 0/0/1.\nThe resulting action is determined by the destination IP address.\nThe resulting action is determined by the destination IP address and port number.\nExplanation: Topic 4.1.3\n\nAny traffic that does not match one of the statements in an ACL has the implicit deny applied to it, which means the traffic is dropped."
  },
  {
    "id": "Modules 3-5-30",
    "module": "Modules 3-5",
    "number": 30,
    "topic": "Security",
    "question": "30. Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)",
    "choices": [
      "inbound",
      "R2 S0/0/1",
      "R1 Gi0/1.12",
      "outbound",
      "R1 S0/0/0",
      "R2 Gi0/1.20"
    ],
    "answers": [
      "R1 Gi0/1.12",
      "outbound"
    ],
    "matching": null,
    "explanation": "",
    "gradable": true,
    "raw": "30. Refer to the exhibit. The Gigabit interfaces on both routers have been configured with subinterface numbers that match the VLAN numbers connected to them. PCs on VLAN 10 should be able to print to the P1 printer on VLAN 12. PCs on VLAN 20 should print to the printers on VLAN 22. What interface and in what direction should you place a standard ACL that allows printing to P1 from data VLAN 10, but stops the PCs on VLAN 20 from using the P1 printer? (Choose two.)\n\ninbound\nR2 S0/0/1\nR1 Gi0/1.12\noutbound\nR1 S0/0/0\nR2 Gi0/1.20"
  },
  {
    "id": "Modules 3-5-31",
    "module": "Modules 3-5",
    "number": 31,
    "topic": "Security",
    "question": "31. Which statement describes a characteristic of standard IPv4 ACLs?",
    "choices": [
      "They are configured in the interface configuration mode.",
      "They can be configured to filter traffic based on both source IP addresses and source ports.",
      "They can be created with a number but not with a name.",
      "They filter traffic based on source IP addresses only."
    ],
    "answers": [
      "They filter traffic based on source IP addresses only."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.1\n\nA standard IPv4 ACL can filter traffic based on source IP addresses only. Unlike an extended ACL, it cannot filter traffic based on Layer 4 ports. However, both standard and extended ACLs can be identified with either a number or a name, and both are configured in global configuration mode.",
    "gradable": true,
    "raw": "31. Which statement describes a characteristic of standard IPv4 ACLs?\n\nThey are configured in the interface configuration mode.\nThey can be configured to filter traffic based on both source IP addresses and source ports.\nThey can be created with a number but not with a name.\nThey filter traffic based on source IP addresses only.\nExplanation: Topic 4.4.1\n\nA standard IPv4 ACL can filter traffic based on source IP addresses only. Unlike an extended ACL, it cannot filter traffic based on Layer 4 ports. However, both standard and extended ACLs can be identified with either a number or a name, and both are configured in global configuration mode."
  },
  {
    "id": "Modules 3-5-32",
    "module": "Modules 3-5",
    "number": 32,
    "topic": "Security",
    "question": "32. What is considered a best practice when configuring ACLs on vty lines?",
    "choices": [
      "Place identical restrictions on all vty lines.",
      "Remove the vty password since the ACL restricts access to trusted users.",
      "Apply the ip access-group command inbound.",
      "Use only extended access lists."
    ],
    "answers": [
      "Place identical restrictions on all vty lines."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.3.1",
    "gradable": true,
    "raw": "32. What is considered a best practice when configuring ACLs on vty lines?\n\nPlace identical restrictions on all vty lines.\nRemove the vty password since the ACL restricts access to trusted users.\nApply the ip access-group command inbound.\nUse only extended access lists.\nExplanation: Topic 5.3.1"
  },
  {
    "id": "Modules 3-5-33",
    "module": "Modules 3-5",
    "number": 33,
    "topic": "Security",
    "question": "33. Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command. The administrator then edited this access-list by issuing the commands below.",
    "choices": [
      "TFTP packets will be permitted.",
      "Ping packets will be permitted.",
      "Telnet packets will be permitted.",
      "SSH packets will be permitted.",
      "All TCP and UDP packets will be denied."
    ],
    "answers": [
      "Ping packets will be permitted.",
      "SSH packets will be permitted."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.2.3\n\nAfter the editing, the final configuration is as follows:\n\nRouter# show access-lists\n\nExtended IP access list 101\n\n5 permit tcp any any eq ssh\n\n10 deny tcp any any\n\n20 deny udp any any\n\n30 permit icmp any any\n\nSo, only SSH packets and ICMP packets will be permitted.",
    "gradable": true,
    "raw": "33. Refer to the exhibit. An administrator first configured an extended ACL as shown by the output of the show access-lists command. The administrator then edited this access-list by issuing the commands below.\n\nTFTP packets will be permitted.\nPing packets will be permitted.\nTelnet packets will be permitted.\nSSH packets will be permitted.\nAll TCP and UDP packets will be denied.\nExplanation: Topic 5.2.3\n\nAfter the editing, the final configuration is as follows:\n\nRouter# show access-lists\n\nExtended IP access list 101\n\n5 permit tcp any any eq ssh\n\n10 deny tcp any any\n\n20 deny udp any any\n\n30 permit icmp any any\n\nSo, only SSH packets and ICMP packets will be permitted."
  },
  {
    "id": "Modules 3-5-34",
    "module": "Modules 3-5",
    "number": 34,
    "topic": "Security",
    "question": "34. Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?",
    "choices": [
      "access-list 103 deny tcp host 192.168.10.0 any eq 23\n\naccess-list 103 permit tcp host 192.168.10.1 eq 80",
      "access-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23",
      "access-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet",
      "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23"
    ],
    "answers": [
      "access-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.2\n\nFor an extended ACL to meet these requirements the following need to be included in the access control entries:\n\nidentification number in the range 100-199 or 2000-2699\npermit or deny parameter\nprotocol\nsource address and wildcard\ndestination address and wildcard\nport number or name",
    "gradable": true,
    "raw": "34. Which set of access control entries would allow all users on the 192.168.10.0/24 network to access a web server that is located at 172.17.80.1, but would not allow them to use Telnet?\n\naccess-list 103 deny tcp host 192.168.10.0 any eq 23\n\naccess-list 103 permit tcp host 192.168.10.1 eq 80\naccess-list 103 permit tcp 192.168.10.0 0.0.0.255 any eq 80\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23\naccess-list 103 permit 192.168.10.0 0.0.0.255 host 172.17.80.1\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq telnet\naccess-list 103 permit tcp 192.168.10.0 0.0.0.255 host 172.17.80.1 eq 80\n\naccess-list 103 deny tcp 192.168.10.0 0.0.0.255 any eq 23\nExplanation: Topic 5.4.2\n\nFor an extended ACL to meet these requirements the following need to be included in the access control entries:\n\nidentification number in the range 100-199 or 2000-2699\npermit or deny parameter\nprotocol\nsource address and wildcard\ndestination address and wildcard\nport number or name"
  },
  {
    "id": "Modules 3-5-35",
    "module": "Modules 3-5",
    "number": 35,
    "topic": "Security",
    "question": "35. What is the term used to describe a mechanism that takes advantage of a vulnerability?",
    "choices": [
      "mitigation",
      "exploit",
      "vulnerability",
      "threat"
    ],
    "answers": [
      "exploit"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.1.1",
    "gradable": true,
    "raw": "35. What is the term used to describe a mechanism that takes advantage of a vulnerability?\n\nmitigation\nexploit\nvulnerability\nthreat\nExplanation: Topic 3.1.1"
  },
  {
    "id": "Modules 3-5-36",
    "module": "Modules 3-5",
    "number": 36,
    "topic": "Security",
    "question": "36. Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "extended ACL outbound on R2 WAN interface towards the internet",
      "standard ACL inbound on R1 vty lines",
      "extended ACLs inbound on R1 G0/0 and G0/1",
      "extended ACL outbound on R2 S0/0/1"
    ],
    "answers": [
      "standard ACL inbound on R1 vty lines"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.3.1\n\nStandard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\nExtended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure.",
    "gradable": true,
    "raw": "36. Refer to the exhibit. The network administrator has an IP address of 192.168.11.10 and needs access to manage R1. What is the best ACL type and placement to use in this situation?\n\nextended ACL outbound on R2 WAN interface towards the internet\nstandard ACL inbound on R1 vty lines\nextended ACLs inbound on R1 G0/0 and G0/1\nextended ACL outbound on R2 S0/0/1\nExplanation: Topic 5.3.1\n\nStandard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\nExtended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure."
  },
  {
    "id": "Modules 3-5-37",
    "module": "Modules 3-5",
    "number": 37,
    "topic": "Security",
    "question": "37. A technician is tasked with using ACLs to secure a router. When would the technician use the any configuration option or command?",
    "choices": [
      "to add a text entry for documentation purposes",
      "to generate and send an informational message whenever the ACE is matched",
      "to identify any IP address",
      "to identify one specific IP address"
    ],
    "answers": [
      "to identify any IP address"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.4",
    "gradable": true,
    "raw": "37. A technician is tasked with using ACLs to secure a router. When would the technician use the any configuration option or command?\n\nto add a text entry for documentation purposes\nto generate and send an informational message whenever the ACE is matched\nto identify any IP address\nto identify one specific IP address\nExplanation: Topic 4.2.4"
  },
  {
    "id": "Modules 3-5-38",
    "module": "Modules 3-5",
    "number": 38,
    "topic": "Security",
    "question": "38. Which statement accurately characterizes the evolution of threats to network security?",
    "choices": [
      "Internet architects planned for network security from the beginning.",
      "Early Internet users often engaged in activities that would harm other users.",
      "Internal threats can cause even greater damage than external threats.",
      "Threats have become less sophisticated while the technical knowledge needed by an attacker has grown."
    ],
    "answers": [
      "Internal threats can cause even greater damage than external threats."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.1.2\n\nInternal threats can be intentional or accidental and cause greater damage than external threats because the internal user has direct access to the internal corporate network and corporate data.",
    "gradable": true,
    "raw": "38. Which statement accurately characterizes the evolution of threats to network security?\n\nInternet architects planned for network security from the beginning.\nEarly Internet users often engaged in activities that would harm other users.\nInternal threats can cause even greater damage than external threats.\nThreats have become less sophisticated while the technical knowledge needed by an attacker has grown.\nExplanation: Topic 3.1.2\n\nInternal threats can be intentional or accidental and cause greater damage than external threats because the internal user has direct access to the internal corporate network and corporate data."
  },
  {
    "id": "Modules 3-5-39",
    "module": "Modules 3-5",
    "number": 39,
    "topic": "Security",
    "question": "39. A user receives a phone call from a person who claims to represent IT services and then asks that user for confirmation of username and password for auditing purposes. Which security threat does this phone call represent?",
    "choices": [
      "spam",
      "social engineering",
      "DDoS",
      "anonymous keylogging"
    ],
    "answers": [
      "social engineering"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.5.6\n\nSocial engineering attempts to gain the confidence of an employee and convince that person to divulge confidential and sensitive information, such as usernames and passwords. DDoS attacks, spam, and keylogging are all examples of software based security threats, not social engineering.",
    "gradable": true,
    "raw": "39. A user receives a phone call from a person who claims to represent IT services and then asks that user for confirmation of username and password for auditing purposes. Which security threat does this phone call represent?\n\nspam\nsocial engineering\nDDoS\nanonymous keylogging\nExplanation: Topic 3.5.6\n\nSocial engineering attempts to gain the confidence of an employee and convince that person to divulge confidential and sensitive information, such as usernames and passwords. DDoS attacks, spam, and keylogging are all examples of software based security threats, not social engineering."
  },
  {
    "id": "Modules 3-5-40",
    "module": "Modules 3-5",
    "number": 40,
    "topic": "Security",
    "question": "40. In what way are zombies used in security attacks?",
    "choices": [
      "They target specific individuals to gain corporate or personal information.",
      "They probe a group of machines for open ports to learn which services are running.",
      "They are maliciously formed code segments used to replace legitimate applications.",
      "They are infected machines that carry out a DDoS attack."
    ],
    "answers": [
      "They are infected machines that carry out a DDoS attack."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.5.9\n\nZombies are infected computers that make up a botnet. The zombies are used to deploy a distributed denial of service (DDoS) attack.",
    "gradable": true,
    "raw": "40. In what way are zombies used in security attacks?\n\nThey target specific individuals to gain corporate or personal information.\nThey probe a group of machines for open ports to learn which services are running.\nThey are maliciously formed code segments used to replace legitimate applications.\nThey are infected machines that carry out a DDoS attack.\nExplanation: Topic 3.5.9\n\nZombies are infected computers that make up a botnet. The zombies are used to deploy a distributed denial of service (DDoS) attack."
  },
  {
    "id": "Modules 3-5-41",
    "module": "Modules 3-5",
    "number": 41,
    "topic": "Security",
    "question": "41. Which attack involves threat actors positioning themselves between a source and destination with the intent of transparently monitoring, capturing, and controlling the communication?",
    "choices": [
      "man-in-the-middle attack",
      "SYN flood attack",
      "DoS attack",
      "ICMP attack"
    ],
    "answers": [
      "man-in-the-middle attack"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.3.4\n\nThe man-in-the-middle attack is a common IP-related attack where threat actors position themselves between a source and destination to transparently monitor, capture, and control the communication.",
    "gradable": true,
    "raw": "41. Which attack involves threat actors positioning themselves between a source and destination with the intent of transparently monitoring, capturing, and controlling the communication?\n\nman-in-the-middle attack\nSYN flood attack\nDoS attack\nICMP attack\nExplanation: Topic 3.3.4\n\nThe man-in-the-middle attack is a common IP-related attack where threat actors position themselves between a source and destination to transparently monitor, capture, and control the communication."
  },
  {
    "id": "Modules 3-5-42",
    "module": "Modules 3-5",
    "number": 42,
    "topic": "Security",
    "question": "42. Which two keywords can be used in an access control list to replace a wildcard mask or address and wildcard mask pair? (Choose two.)",
    "choices": [
      "host",
      "most",
      "gt",
      "some",
      "any",
      "all"
    ],
    "answers": [
      "host",
      "any"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.4\n\nThe host keyword is used when using a specific device IP address in an ACL. For example, the deny host 192.168.5.5 command is the same is the deny 192.168.5.5 0.0.0.0 command. The any keyword is used to allow any mask through that meets the criteria. For example, the permit any command is the same as permit 0.0.0.0 255.255.255.255 command.",
    "gradable": true,
    "raw": "42. Which two keywords can be used in an access control list to replace a wildcard mask or address and wildcard mask pair? (Choose two.)\n\nhost\nmost\ngt\nsome\nany\nall\nExplanation: Topic 4.2.4\n\nThe host keyword is used when using a specific device IP address in an ACL. For example, the deny host 192.168.5.5 command is the same is the deny 192.168.5.5 0.0.0.0 command. The any keyword is used to allow any mask through that meets the criteria. For example, the permit any command is the same as permit 0.0.0.0 255.255.255.255 command."
  },
  {
    "id": "Modules 3-5-43",
    "module": "Modules 3-5",
    "number": 43,
    "topic": "Security",
    "question": "43. Which statement describes a difference between the operation of inbound and outbound ACLs?",
    "choices": [
      "Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed.",
      "In contrast to outbound ALCs, inbound ACLs can be used to filter packets with multiple criteria.",
      "On a network interface, more than one inbound ACL can be configured but only one outbound ACL can be configured.",
      "Inbound ACLs can be used in both routers and switches but outbound ACLs can be used only on routers."
    ],
    "answers": [
      "Inbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.1.3\n\nWith an inbound ACL, incoming packets are processed before they are routed. With an outbound ACL, packets are first routed to the outbound interface, then they are processed. Thus processing inbound is more efficient from the router perspective. The structure, filtering methods, and limitations (on an interface, only one inbound and one outbound ACL can be configured) are the same for both types of ACLs.",
    "gradable": true,
    "raw": "43. Which statement describes a difference between the operation of inbound and outbound ACLs?\n\nInbound ACLs are processed before the packets are routed while outbound ACLs are processed after the routing is completed.\nIn contrast to outbound ALCs, inbound ACLs can be used to filter packets with multiple criteria.\nOn a network interface, more than one inbound ACL can be configured but only one outbound ACL can be configured.\nInbound ACLs can be used in both routers and switches but outbound ACLs can be used only on routers.\nExplanation: Topic 4.1.3\n\nWith an inbound ACL, incoming packets are processed before they are routed. With an outbound ACL, packets are first routed to the outbound interface, then they are processed. Thus processing inbound is more efficient from the router perspective. The structure, filtering methods, and limitations (on an interface, only one inbound and one outbound ACL can be configured) are the same for both types of ACLs."
  },
  {
    "id": "Modules 3-5-44",
    "module": "Modules 3-5",
    "number": 44,
    "topic": "Security",
    "question": "44. What effect would the Router1(config-ext-nacl)# permit tcp 172.16.4.0 0.0.0.255 any eq www command have when implemented inbound on the f0/0 interface?",
    "choices": [
      "All TCP traffic is permitted, and all other traffic is denied.",
      "Traffic originating from 172.16.4.0/24 is permitted to all TCP port 80 destinations.",
      "All traffic from 172.16.4.0/24 is permitted anywhere on any port.",
      "The command is rejected by the router because it is incomplete."
    ],
    "answers": [
      "Traffic originating from 172.16.4.0/24 is permitted to all TCP port 80 destinations."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.2",
    "gradable": true,
    "raw": "44. What effect would the Router1(config-ext-nacl)# permit tcp 172.16.4.0 0.0.0.255 any eq www command have when implemented inbound on the f0/0 interface?\n\nAll TCP traffic is permitted, and all other traffic is denied.\nTraffic originating from 172.16.4.0/24 is permitted to all TCP port 80 destinations.\nAll traffic from 172.16.4.0/24 is permitted anywhere on any port.\nThe command is rejected by the router because it is incomplete.\nExplanation: Topic 5.4.2"
  },
  {
    "id": "Modules 3-5-45",
    "module": "Modules 3-5",
    "number": 45,
    "topic": "Security",
    "question": "45. Which ACE will permit a packet that originates from any network and is destined for a web server at 192.168.1.1?",
    "choices": [
      "access-list 101 permit tcp any host 192.168.1.1 eq 80",
      "access-list 101 permit tcp host 192.168.1.1 eq 80 any",
      "access-list 101 permit tcp host 192.168.1.1 any eq 80",
      "access-list 101 permit tcp any eq 80 host 192.168.1.1"
    ],
    "answers": [
      "access-list 101 permit tcp any host 192.168.1.1 eq 80"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.2",
    "gradable": true,
    "raw": "45. Which ACE will permit a packet that originates from any network and is destined for a web server at 192.168.1.1?\n\naccess-list 101 permit tcp any host 192.168.1.1 eq 80\naccess-list 101 permit tcp host 192.168.1.1 eq 80 any\naccess-list 101 permit tcp host 192.168.1.1 any eq 80\naccess-list 101 permit tcp any eq 80 host 192.168.1.1\nExplanation: Topic 5.4.2"
  },
  {
    "id": "Modules 3-5-46",
    "module": "Modules 3-5",
    "number": 46,
    "topic": "Security",
    "question": "46. Refer to the exhibit. A new network policy requires an ACL denying FTP and Telnet access to a Corp file server from all interns. The address of the file server is 172.16.1.15 and all interns are assigned addresses in the 172.18.200.0/24 network. After implementing the ACL, no one in the Corp network can access any of the servers. What is the problem?",
    "choices": [
      "Inbound ACLs must be routed before they are processed.",
      "The ACL is implicitly denying access to all the servers.",
      "Named ACLs require the use of port numbers.",
      "The ACL is applied to the interface using the wrong direction."
    ],
    "answers": [
      "The ACL is implicitly denying access to all the servers."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.1.3\n\nBoth named and numbered ACLs have an implicit deny ACE at the end of the list. This implicit deny blocks all traffic.",
    "gradable": true,
    "raw": "46. Refer to the exhibit. A new network policy requires an ACL denying FTP and Telnet access to a Corp file server from all interns. The address of the file server is 172.16.1.15 and all interns are assigned addresses in the 172.18.200.0/24 network. After implementing the ACL, no one in the Corp network can access any of the servers. What is the problem?\n\nInbound ACLs must be routed before they are processed.\nThe ACL is implicitly denying access to all the servers.\nNamed ACLs require the use of port numbers.\nThe ACL is applied to the interface using the wrong direction.\nExplanation: Topic 4.1.3\n\nBoth named and numbered ACLs have an implicit deny ACE at the end of the list. This implicit deny blocks all traffic."
  },
  {
    "id": "Modules 3-5-47",
    "module": "Modules 3-5",
    "number": 47,
    "topic": "Security",
    "question": "47. A technician is tasked with using ACLs to secure a router. When would the technician use the access-class 20 in configuration option or command?",
    "choices": [
      "to secure administrative access to the router",
      "to remove an ACL from an interface",
      "to remove a configured ACL",
      "to apply a standard ACL to an interface"
    ],
    "answers": [
      "to secure administrative access to the router"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.3.1",
    "gradable": true,
    "raw": "47. A technician is tasked with using ACLs to secure a router. When would the technician use the access-class 20 in configuration option or command?\n\nto secure administrative access to the router\nto remove an ACL from an interface\nto remove a configured ACL\nto apply a standard ACL to an interface\nExplanation: Topic 5.3.1"
  },
  {
    "id": "Modules 3-5-48",
    "module": "Modules 3-5",
    "number": 48,
    "topic": "Security",
    "question": "48. What is the term used to describe the same pre-shared key or secret key, known by both the sender and receiver to encrypt and decrypt data?",
    "choices": [
      "symmetric encryption algorithm",
      "data integrity",
      "exploit",
      "risk"
    ],
    "answers": [
      "symmetric encryption algorithm"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.10.7",
    "gradable": true,
    "raw": "48. What is the term used to describe the same pre-shared key or secret key, known by both the sender and receiver to encrypt and decrypt data?\n\nsymmetric encryption algorithm\ndata integrity\nexploit\nrisk\nExplanation: Topic 3.10.7"
  },
  {
    "id": "Modules 3-5-49",
    "module": "Modules 3-5",
    "number": 49,
    "topic": "Security",
    "question": "49. Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "standard ACL inbound on R2 WAN interface connecting to the internet",
      "standard ACL outbound on R2 WAN interface towards the internet",
      "standard ACL inbound on R1 G0/0",
      "standard ACL outbound on R1 G0/0"
    ],
    "answers": [
      "standard ACL outbound on R2 WAN interface towards the internet"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.4\n\n- Standard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\n\n- Extended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure.",
    "gradable": true,
    "raw": "49. Refer to the exhibit. Internet privileges for an employee have been revoked because of abuse but the employee still needs access to company resources. What is the best ACL type and placement to use in this situation?\n\nstandard ACL inbound on R2 WAN interface connecting to the internet\nstandard ACL outbound on R2 WAN interface towards the internet\nstandard ACL inbound on R1 G0/0\nstandard ACL outbound on R1 G0/0\nExplanation: Topic 4.4.4\n\n- Standard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\n\n- Extended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure."
  },
  {
    "id": "Modules 3-5-50",
    "module": "Modules 3-5",
    "number": 50,
    "topic": "Security",
    "question": "50. Refer to the exhibit. The student on the H1 computer continues to launch an extended ping with expanded packets at the student on the H2 computer. The school network administrator wants to stop this behavior, but still allow both students access to web-based computer assignments. What would be the best plan for the network administrator?",
    "choices": [
      "Apply an inbound standard ACL on R1 Gi0/0.",
      "Apply an inbound extended ACL on R2 Gi0/1.",
      "Apply an outbound extended ACL on R1 S0/0/1.",
      "Apply an inbound extended ACL on R1 Gi0/0.",
      "Apply an outbound standard ACL on R2 S0/0/1."
    ],
    "answers": [
      "Apply an inbound extended ACL on R1 Gi0/0."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.5\n\nThis access list must be an extended ACL in order to filter on specific source and destination host addresses. Commonly, the best place for an extended ACL is closest to the source, which is H1. Traffic from H1 travels into the switch, then out of the switch into the R1 Gi0/0 interface. This Gi0/0 interface would be the best location for this type of extended ACL. The ACL would be applied on the inbound interface since the packets from H1 would be coming into the R1 router.",
    "gradable": true,
    "raw": "50. Refer to the exhibit. The student on the H1 computer continues to launch an extended ping with expanded packets at the student on the H2 computer. The school network administrator wants to stop this behavior, but still allow both students access to web-based computer assignments. What would be the best plan for the network administrator?\n\nApply an inbound standard ACL on R1 Gi0/0.\nApply an inbound extended ACL on R2 Gi0/1.\nApply an outbound extended ACL on R1 S0/0/1.\nApply an inbound extended ACL on R1 Gi0/0.\nApply an outbound standard ACL on R2 S0/0/1.\nExplanation: Topic 4.4.5\n\nThis access list must be an extended ACL in order to filter on specific source and destination host addresses. Commonly, the best place for an extended ACL is closest to the source, which is H1. Traffic from H1 travels into the switch, then out of the switch into the R1 Gi0/0 interface. This Gi0/0 interface would be the best location for this type of extended ACL. The ACL would be applied on the inbound interface since the packets from H1 would be coming into the R1 router."
  },
  {
    "id": "Modules 3-5-51",
    "module": "Modules 3-5",
    "number": 51,
    "topic": "Security",
    "question": "51. A technician is tasked with using ACLs to secure a router. When would the technician use the ‘ip access-group 101 in’ configuration option or command?",
    "choices": [
      "to apply an extended ACL to an interface",
      "to secure management traffic into the router",
      "to secure administrative access to the router",
      "to display all restricted traffic"
    ],
    "answers": [
      "to apply an extended ACL to an interface"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.2",
    "gradable": true,
    "raw": "51. A technician is tasked with using ACLs to secure a router. When would the technician use the ‘ip access-group 101 in’ configuration option or command?\n\nto apply an extended ACL to an interface\nto secure management traffic into the router\nto secure administrative access to the router\nto display all restricted traffic\nExplanation: Topic 5.4.2"
  },
  {
    "id": "Modules 3-5-52",
    "module": "Modules 3-5",
    "number": 52,
    "topic": "Security",
    "question": "52. In which type of attack is falsified information used to redirect users to malicious Internet sites?",
    "choices": [
      "DNS amplification and reflection",
      "ARP cache poisoning",
      "DNS cache poisoning",
      "domain generation"
    ],
    "answers": [
      "DNS cache poisoning"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.8.4\n\nIn a DNS cache poisoning attack, falsified information is used to redirect users from legitimate to malicious internet sites.",
    "gradable": true,
    "raw": "52. In which type of attack is falsified information used to redirect users to malicious Internet sites?\n\nDNS amplification and reflection\nARP cache poisoning\nDNS cache poisoning\ndomain generation\nExplanation: Topic 3.8.4\n\nIn a DNS cache poisoning attack, falsified information is used to redirect users from legitimate to malicious internet sites."
  },
  {
    "id": "Modules 3-5-53",
    "module": "Modules 3-5",
    "number": 53,
    "topic": "Security",
    "question": "53. What is a feature of an IPS?",
    "choices": [
      "It can stop malicious packets.",
      "It is deployed in offline mode.",
      "It has no impact on latency.",
      "It is primarily focused on identifying possible incidents."
    ],
    "answers": [
      "It can stop malicious packets."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.9.4\n\nAn advantage of an intrusion prevention systems (IPS) is that it can identify and stop malicious packets. However, because an IPS is deployed inline, it can add latency to the network.",
    "gradable": true,
    "raw": "53. What is a feature of an IPS?\n\nIt can stop malicious packets.\nIt is deployed in offline mode.\nIt has no impact on latency.\nIt is primarily focused on identifying possible incidents.\nExplanation: Topic 3.9.4\n\nAn advantage of an intrusion prevention systems (IPS) is that it can identify and stop malicious packets. However, because an IPS is deployed inline, it can add latency to the network."
  },
  {
    "id": "Modules 3-5-54",
    "module": "Modules 3-5",
    "number": 54,
    "topic": "Security",
    "question": "54. What is the term used to describe a potential danger to a company’s assets, data, or network functionality?",
    "choices": [
      "vulnerability",
      "threat",
      "asset",
      "exploit"
    ],
    "answers": [
      "threat"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.1.1\n\nA threat is a potential danger to a company’s assets, data, or network functionality. An exploit is a mechanism that takes advantage of a vulnerability. A vulnerability is a weakness in a system, or its design, that could be exploited by a threat.",
    "gradable": true,
    "raw": "54. What is the term used to describe a potential danger to a company’s assets, data, or network functionality?\n\nvulnerability\nthreat\nasset\nexploit\nExplanation: Topic 3.1.1\n\nA threat is a potential danger to a company’s assets, data, or network functionality. An exploit is a mechanism that takes advantage of a vulnerability. A vulnerability is a weakness in a system, or its design, that could be exploited by a threat."
  },
  {
    "id": "Modules 3-5-55",
    "module": "Modules 3-5",
    "number": 55,
    "topic": "Security",
    "question": "55. Refer to the exhibit. Network 192.168.30.0/24 contains all of the company servers. Policy dictates that traffic from the servers to both networks 192.168.10.0 and 192.168.11.0 be limited to replies for original requests. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "extended ACL inbound on R3 G0/0",
      "extended ACL inbound on R1 G0/0",
      "standard ACL inbound on R1 G0/1",
      "standard ACL inbound on R1 vty lines"
    ],
    "answers": [
      "extended ACL inbound on R3 G0/0"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.6\n\nStandard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\nExtended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure.",
    "gradable": true,
    "raw": "55. Refer to the exhibit. Network 192.168.30.0/24 contains all of the company servers. Policy dictates that traffic from the servers to both networks 192.168.10.0 and 192.168.11.0 be limited to replies for original requests. What is the best ACL type and placement to use in this situation?\n\nextended ACL inbound on R3 G0/0\nextended ACL inbound on R1 G0/0\nstandard ACL inbound on R1 G0/1\nstandard ACL inbound on R1 vty lines\nExplanation: Topic 5.4.6\n\nStandard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\nExtended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure."
  },
  {
    "id": "Modules 3-5-56",
    "module": "Modules 3-5",
    "number": 56,
    "topic": "Security",
    "question": "56. What does the CLI prompt change to after entering the command ip access-list standard aaa from global configuration mode?",
    "choices": [
      "Router(config-line)#",
      "Router(config-std-nacl)#",
      "Router(config)#",
      "Router(config-router)#",
      "Router(config-if)#"
    ],
    "answers": [
      "Router(config-std-nacl)#"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.1.3",
    "gradable": true,
    "raw": "56. What does the CLI prompt change to after entering the command ip access-list standard aaa from global configuration mode?\n\nRouter(config-line)#\nRouter(config-std-nacl)#\nRouter(config)#\nRouter(config-router)#\nRouter(config-if)#\nExplanation: Topic 5.1.3"
  },
  {
    "id": "Modules 3-5-57",
    "module": "Modules 3-5",
    "number": 57,
    "topic": "Security",
    "question": "57. Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "extended ACL outbound on R2 WAN interface towards the internet",
      "standard ACL outbound on R2 WAN interface towards the internet",
      "standard ACL outbound on R2 S0/0/0",
      "extended ACLs inbound on R1 G0/0 and G0/1"
    ],
    "answers": [
      "extended ACLs inbound on R1 G0/0 and G0/1"
    ],
    "matching": null,
    "explanation": "",
    "gradable": true,
    "raw": "57. Refer to the exhibit. Many employees are wasting company time accessing social media on their work computers. The company wants to stop this access. What is the best ACL type and placement to use in this situation?\n\nextended ACL outbound on R2 WAN interface towards the internet\nstandard ACL outbound on R2 WAN interface towards the internet\nstandard ACL outbound on R2 S0/0/0\nextended ACLs inbound on R1 G0/0 and G0/1"
  },
  {
    "id": "Modules 3-5-58",
    "module": "Modules 3-5",
    "number": 58,
    "topic": "Security",
    "question": "58. A technician is tasked with using ACLs to secure a router. When would the technician use the 40 deny host 192.168.23.8 configuration option or command?",
    "choices": [
      "to remove all ACLs from the router",
      "to create an entry in a numbered ACL",
      "to apply an ACL to all router interfaces",
      "to secure administrative access to the router"
    ],
    "answers": [
      "to create an entry in a numbered ACL"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.2.3",
    "gradable": true,
    "raw": "58. A technician is tasked with using ACLs to secure a router. When would the technician use the 40 deny host 192.168.23.8 configuration option or command?\n\nto remove all ACLs from the router\nto create an entry in a numbered ACL\nto apply an ACL to all router interfaces\nto secure administrative access to the router\nExplanation: Topic 5.2.3"
  },
  {
    "id": "Modules 3-5-59",
    "module": "Modules 3-5",
    "number": 59,
    "topic": "Security",
    "question": "59. What is the best description of Trojan horse malware?",
    "choices": [
      "It is malware that can only be distributed over the Internet.",
      "It appears as useful software but hides malicious code.",
      "It is software that causes annoying but not fatal computer problems.",
      "It is the most easily detected form of malware."
    ],
    "answers": [
      "It appears as useful software but hides malicious code."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.4.2",
    "gradable": true,
    "raw": "59. What is the best description of Trojan horse malware?\n\nIt is malware that can only be distributed over the Internet.\nIt appears as useful software but hides malicious code.\nIt is software that causes annoying but not fatal computer problems.\nIt is the most easily detected form of malware.\nExplanation: Topic 3.4.2"
  },
  {
    "id": "Modules 3-5-60",
    "module": "Modules 3-5",
    "number": 60,
    "topic": "Security",
    "question": "60. What wild card mask will match networks 172.16.0.0 through 172.19.0.0?",
    "choices": [
      "0.0.3.255",
      "0.252.255.255",
      "0.3.255.255",
      "0.0.255.255"
    ],
    "answers": [
      "0.3.255.255"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.3\n\nThe subnets 172.16.0.0 through 172.19.0.0 all share the same 14 high level bits. A wildcard mask in binary that matches 14 high order bits is 00000000.00000011.11111111.11111111. In dotted decimal this wild card mask is 0.3.255.255.",
    "gradable": true,
    "raw": "60. What wild card mask will match networks 172.16.0.0 through 172.19.0.0?\n\n0.0.3.255\n0.252.255.255\n0.3.255.255\n0.0.255.255\nExplanation: Topic 4.2.3\n\nThe subnets 172.16.0.0 through 172.19.0.0 all share the same 14 high level bits. A wildcard mask in binary that matches 14 high order bits is 00000000.00000011.11111111.11111111. In dotted decimal this wild card mask is 0.3.255.255."
  },
  {
    "id": "Modules 3-5-61",
    "module": "Modules 3-5",
    "number": 61,
    "topic": "Security",
    "question": "61. What is the term used to describe gray hat hackers who publicly protest organizations or governments by posting articles, videos, leaking sensitive information, and performing network attacks?",
    "choices": [
      "white hat hackers",
      "grey hat hackers",
      "hacktivists",
      "state-sponsored hacker"
    ],
    "answers": [
      "hacktivists"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.2.2",
    "gradable": true,
    "raw": "61. What is the term used to describe gray hat hackers who publicly protest organizations or governments by posting articles, videos, leaking sensitive information, and performing network attacks?\n\nwhite hat hackers\ngrey hat hackers\nhacktivists\nstate-sponsored hacker\nExplanation: Topic 3.2.2"
  },
  {
    "id": "Modules 3-5-62",
    "module": "Modules 3-5",
    "number": 62,
    "topic": "Security",
    "question": "62. A technician is tasked with using ACLs to secure a router. When would the technician use the no ip access-list 101 configuration option or command?",
    "choices": [
      "to apply an ACL to all router interfaces",
      "to secure administrative access to the router",
      "to remove all ACLs from the router",
      "to remove a configured ACL"
    ],
    "answers": [
      "to remove a configured ACL"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.2",
    "gradable": true,
    "raw": "62. A technician is tasked with using ACLs to secure a router. When would the technician use the no ip access-list 101 configuration option or command?\n\nto apply an ACL to all router interfaces\nto secure administrative access to the router\nto remove all ACLs from the router\nto remove a configured ACL\nExplanation: Topic 5.4.2"
  },
  {
    "id": "Modules 3-5-63",
    "module": "Modules 3-5",
    "number": 63,
    "topic": "Security",
    "question": "63. What is the term used to describe unethical criminals who compromise computer and network security for personal gain, or for malicious reasons?",
    "choices": [
      "hacktivists",
      "vulnerability broker",
      "black hat hackers",
      "script kiddies"
    ],
    "answers": [
      "black hat hackers"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.2.1\n\nBlack hat hackers are unethical threat actors who use their skills to compromise computer and network security vulnerabilities. The goal is usually financial gain or personal gain, or the hacker may have malicious intent. A vulnerability broker is a gray hat hacker who attempts to discover exploits and report them to vendors, sometimes for prizes or rewards. Hacktivists are gray hat hackers who publicly protest organizations or governments by posting articles or videos, leaking sensitive information, and performing network attacks. Script kiddies are inexperienced hackers (sometimes teenagers) running existing scripts, tools, and exploits to cause harm—but typically not for profit.",
    "gradable": true,
    "raw": "63. What is the term used to describe unethical criminals who compromise computer and network security for personal gain, or for malicious reasons?\n\nhacktivists\nvulnerability broker\nblack hat hackers\nscript kiddies\nExplanation: Topic 3.2.1\n\nBlack hat hackers are unethical threat actors who use their skills to compromise computer and network security vulnerabilities. The goal is usually financial gain or personal gain, or the hacker may have malicious intent. A vulnerability broker is a gray hat hacker who attempts to discover exploits and report them to vendors, sometimes for prizes or rewards. Hacktivists are gray hat hackers who publicly protest organizations or governments by posting articles or videos, leaking sensitive information, and performing network attacks. Script kiddies are inexperienced hackers (sometimes teenagers) running existing scripts, tools, and exploits to cause harm—but typically not for profit."
  },
  {
    "id": "Modules 3-5-64",
    "module": "Modules 3-5",
    "number": 64,
    "topic": "Security",
    "question": "64. What is the term used to describe a guarantee that the message is not a forgery and does actually come from whom it states?",
    "choices": [
      "origin authentication",
      "mitigation",
      "exploit",
      "data non-repudiation"
    ],
    "answers": [
      "origin authentication"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.10.2",
    "gradable": true,
    "raw": "64. What is the term used to describe a guarantee that the message is not a forgery and does actually come from whom it states?\n\norigin authentication\nmitigation\nexploit\ndata non-repudiation\nExplanation: Topic 3.10.2"
  },
  {
    "id": "Modules 3-5-65",
    "module": "Modules 3-5",
    "number": 65,
    "topic": "Security",
    "question": "65. A technician is tasked with using ACLs to secure a router. When would the technician use the ip access-group 101 in configuration option or command?",
    "choices": [
      "to secure administrative access to the router",
      "to apply an extended ACL to an interface",
      "to display all restricted traffic",
      "to secure management traffic into the router"
    ],
    "answers": [
      "to apply an extended ACL to an interface"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.2",
    "gradable": true,
    "raw": "65. A technician is tasked with using ACLs to secure a router. When would the technician use the ip access-group 101 in configuration option or command?\n\nto secure administrative access to the router\nto apply an extended ACL to an interface\nto display all restricted traffic\nto secure management traffic into the router\nExplanation: Topic 5.4.2"
  },
  {
    "id": "Modules 3-5-66",
    "module": "Modules 3-5",
    "number": 66,
    "topic": "Security",
    "question": "66. A technician is tasked with using ACLs to secure a router. When would the technician use the remark configuration option or command?",
    "choices": [
      "to generate and send an informational message whenever the ACE is matched",
      "to add a text entry for documentation purposes",
      "to identify one specific IP address",
      "to restrict specific traffic access through an interface"
    ],
    "answers": [
      "to add a text entry for documentation purposes"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.1.2",
    "gradable": true,
    "raw": "66. A technician is tasked with using ACLs to secure a router. When would the technician use the remark configuration option or command?\n\nto generate and send an informational message whenever the ACE is matched\nto add a text entry for documentation purposes\nto identify one specific IP address\nto restrict specific traffic access through an interface\nExplanation: Topic 5.1.2"
  },
  {
    "id": "Modules 3-5-67",
    "module": "Modules 3-5",
    "number": 67,
    "topic": "Security",
    "question": "67. Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "extended ACL outbound on R2 WAN interface towards the internet",
      "standard ACL outbound on R2 S0/0/0",
      "extended ACL inbound on R2 S0/0/0",
      "standard ACL inbound on R2 WAN interface connecting to the internet"
    ],
    "answers": [
      "extended ACL outbound on R2 WAN interface towards the internet"
    ],
    "matching": null,
    "explanation": "",
    "gradable": true,
    "raw": "67. Refer to the exhibit. The company CEO demands that one ACL be created to permit email traffic to the internet and deny FTP access. What is the best ACL type and placement to use in this situation?\n\nextended ACL outbound on R2 WAN interface towards the internet\nstandard ACL outbound on R2 S0/0/0\nextended ACL inbound on R2 S0/0/0\nstandard ACL inbound on R2 WAN interface connecting to the internet"
  },
  {
    "id": "Modules 3-5-68",
    "module": "Modules 3-5",
    "number": 68,
    "topic": "Security",
    "question": "68. A technician is tasked with using ACLs to secure a router. When would the technician use the established configuration option or command?",
    "choices": [
      "to add a text entry for documentation purposes",
      "to display all restricted traffic",
      "to allow specified traffic through an interface",
      "to allow returning reply traffic to enter the internal network"
    ],
    "answers": [
      "to allow returning reply traffic to enter the internal network"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.4.6",
    "gradable": true,
    "raw": "68. A technician is tasked with using ACLs to secure a router. When would the technician use the established configuration option or command?\n\nto add a text entry for documentation purposes\nto display all restricted traffic\nto allow specified traffic through an interface\nto allow returning reply traffic to enter the internal network\nExplanation: Topic 5.4.6"
  },
  {
    "id": "Modules 3-5-69",
    "module": "Modules 3-5",
    "number": 69,
    "topic": "Security",
    "question": "69. A technician is tasked with using ACLs to secure a router. When would the technician use the deny configuration option or command?",
    "choices": [
      "to identify one specific IP address",
      "to display all restricted traffic",
      "to restrict specific traffic access through an interface",
      "to generate and send an informational message whenever the ACE is matched"
    ],
    "answers": [
      "to restrict specific traffic access through an interface"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 5.1.2",
    "gradable": true,
    "raw": "69. A technician is tasked with using ACLs to secure a router. When would the technician use the deny configuration option or command?\n\nto identify one specific IP address\nto display all restricted traffic\nto restrict specific traffic access through an interface\nto generate and send an informational message whenever the ACE is matched\nExplanation: Topic 5.1.2"
  },
  {
    "id": "Modules 3-5-70",
    "module": "Modules 3-5",
    "number": 70,
    "topic": "Security",
    "question": "70. Refer to the exhibit. Only authorized remote users are allowed remote access to the company server 192.168.30.10. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "extended ACLs inbound on R1 G0/0 and G0/1",
      "extended ACL outbound on R2 WAN interface towards the internet",
      "extended ACL inbound on R2 S0/0/0",
      "extended ACL inbound on R2 WAN interface connected to the internet"
    ],
    "answers": [
      "extended ACL inbound on R2 WAN interface connected to the internet"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.5",
    "gradable": true,
    "raw": "70. Refer to the exhibit. Only authorized remote users are allowed remote access to the company server 192.168.30.10. What is the best ACL type and placement to use in this situation?\n\nextended ACLs inbound on R1 G0/0 and G0/1\nextended ACL outbound on R2 WAN interface towards the internet\nextended ACL inbound on R2 S0/0/0\nextended ACL inbound on R2 WAN interface connected to the internet\nExplanation: Topic 4.4.5"
  },
  {
    "id": "Modules 3-5-71",
    "module": "Modules 3-5",
    "number": 71,
    "topic": "Security",
    "question": "71. Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "standard ACL inbound on R1 vty lines",
      "extended ACL inbound on R1 G0/0",
      "standard ACL inbound on R1 G0/1",
      "extended ACL inbound on R3 S0/0/1"
    ],
    "answers": [
      "standard ACL inbound on R1 G0/1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.3\n\nA standard ACL is the best choice here because the security policy requires filtering traffic based solely on the source IP address (the 192.168.11.0/24 network). Placing the ACL inbound on the R1 G0/1 interface is most efficient because it discards unauthorized packets immediately upon entering the router. This \"close to the source\" placement prevents unwanted traffic from consuming any routing resources or bandwidth on the rest of the network.",
    "gradable": true,
    "raw": "71. Refer to the exhibit. Employees on 192.168.11.0/24 work on critically sensitive information and are not allowed access off their network. What is the best ACL type and placement to use in this situation?\n\nstandard ACL inbound on R1 vty lines\nextended ACL inbound on R1 G0/0\nstandard ACL inbound on R1 G0/1\nextended ACL inbound on R3 S0/0/1\nExplanation: Topic 4.4.3\n\nA standard ACL is the best choice here because the security policy requires filtering traffic based solely on the source IP address (the 192.168.11.0/24 network). Placing the ACL inbound on the R1 G0/1 interface is most efficient because it discards unauthorized packets immediately upon entering the router. This \"close to the source\" placement prevents unwanted traffic from consuming any routing resources or bandwidth on the rest of the network."
  },
  {
    "id": "Modules 3-5-72",
    "module": "Modules 3-5",
    "number": 72,
    "topic": "Security",
    "question": "72. A technician is tasked with using ACLs to secure a router. When would the technician use the host configuration option or command?",
    "choices": [
      "to add a text entry for documentation purposes",
      "to generate and send an informational message whenever the ACE is matched",
      "to identify any IP address",
      "to identify one specific IP address"
    ],
    "answers": [
      "to identify one specific IP address"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.2.4",
    "gradable": true,
    "raw": "72. A technician is tasked with using ACLs to secure a router. When would the technician use the host configuration option or command?\n\nto add a text entry for documentation purposes\nto generate and send an informational message whenever the ACE is matched\nto identify any IP address\nto identify one specific IP address\nExplanation: Topic 4.2.4"
  },
  {
    "id": "Modules 3-5-73",
    "module": "Modules 3-5",
    "number": 73,
    "topic": "Security",
    "question": "73. What commonly motivates cybercriminals to attack networks as compared to hacktivists or state-sponsored hackers?",
    "choices": [
      "financial gain",
      "political reasons",
      "fame seeking",
      "status among peers"
    ],
    "answers": [
      "financial gain"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 3.2.3\n\nCybercriminals are commonly motivated by money. Hackers are known to hack for status. Cyberterrorists are motivated to commit cybercrimes for religious or political reasons.",
    "gradable": true,
    "raw": "73. What commonly motivates cybercriminals to attack networks as compared to hacktivists or state-sponsored hackers?\n\nfinancial gain\npolitical reasons\nfame seeking\nstatus among peers\nExplanation: Topic 3.2.3\n\nCybercriminals are commonly motivated by money. Hackers are known to hack for status. Cyberterrorists are motivated to commit cybercrimes for religious or political reasons."
  },
  {
    "id": "Modules 3-5-74",
    "module": "Modules 3-5",
    "number": 74,
    "topic": "Security",
    "question": "74. Refer to the exhibit. The company has provided IP phones to employees on the 192.168.10.0/24 network and the voice traffic will need priority over data traffic. What is the best ACL type and placement to use in this situation?",
    "choices": [
      "extended ACL inbound on R1 G0/0",
      "extended ACL outbound on R2 WAN interface towards the internet",
      "extended ACL outbound on R2 S0/0/1",
      "extended ACLs inbound on R1 G0/0 and G0/1"
    ],
    "answers": [
      "extended ACL inbound on R1 G0/0"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 4.4.3\n\nStandard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\nExtended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure.\nEnterprise Networking, Security, and Automation (Version 7.00) - Network Security Exam PDF File\n\n\t\tPost navigation\n\t\t← Previous Article CCNA 3 v7 Modules 1 - 2: OSPF Concepts and Configuration Exam AnswersNext Article → CCNA 3 v7 Modules 6 - 8: WAN Concepts Exam Answers",
    "gradable": true,
    "raw": "74. Refer to the exhibit. The company has provided IP phones to employees on the 192.168.10.0/24 network and the voice traffic will need priority over data traffic. What is the best ACL type and placement to use in this situation?\n\nextended ACL inbound on R1 G0/0\nextended ACL outbound on R2 WAN interface towards the internet\nextended ACL outbound on R2 S0/0/1\nextended ACLs inbound on R1 G0/0 and G0/1\nExplanation: Topic 4.4.3\n\nStandard ACLs permit or deny packets based only on the source IPv4 address. Because all traffic types are permitted or denied, standard ACLs should be located as close to the destination as possible.\nExtended ACLs permit or deny packets based on the source IPv4 address and destination IPv4 address, protocol type, source and destination TCP or UDP ports and more. Because the filtering of extended ACLs is so specific, extended ACLs should be located as close as possible to the source of the traffic to be filtered. Undesirable traffic is denied close to the source network without crossing the network infrastructure.\nEnterprise Networking, Security, and Automation (Version 7.00) - Network Security Exam PDF File\n\n\t\tPost navigation\n\t\t← Previous Article CCNA 3 v7 Modules 1 - 2: OSPF Concepts and Configuration Exam AnswersNext Article → CCNA 3 v7 Modules 6 - 8: WAN Concepts Exam Answers"
  },
  {
    "id": "Modules 6-8-1",
    "module": "Modules 6-8",
    "number": 1,
    "topic": "NAT",
    "question": "1. Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)",
    "choices": [
      "NAT improves packet handling.",
      "NAT adds authentication capability to IPv4.",
      "NAT will impact negatively on switch performance.",
      "NAT causes routing tables to include more information.",
      "NAT provides a solution to slow down the IPv4 address depletion.",
      "NAT introduces problems for some applications that require end-to-end connectivity."
    ],
    "answers": [
      "NAT provides a solution to slow down the IPv4 address depletion.",
      "NAT introduces problems for some applications that require end-to-end connectivity."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.3.1\r\nNetwork Address Translation (NAT) is a technology that is implemented within IPv4 networks. One application of NAT is to use private IP addresses inside a network and use NAT to share a few public IP addresses for many internal hosts. In this way it provides a solution to slow down the IPv4 address depletion. However, since NAT hides the actual IP addresses that are used by end devices, it may cause problems for some applications that require end-to-end connectivity.",
    "gradable": true,
    "raw": "1. Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)\r\n\r\nNAT improves packet handling.\r\nNAT adds authentication capability to IPv4.\r\nNAT will impact negatively on switch performance.\r\nNAT causes routing tables to include more information.\r\nNAT provides a solution to slow down the IPv4 address depletion.\r\nNAT introduces problems for some applications that require end-to-end connectivity.\r\nExplanation: Topic 6.3.1\r\nNetwork Address Translation (NAT) is a technology that is implemented within IPv4 networks. One application of NAT is to use private IP addresses inside a network and use NAT to share a few public IP addresses for many internal hosts. In this way it provides a solution to slow down the IPv4 address depletion. However, since NAT hides the actual IP addresses that are used by end devices, it may cause problems for some applications that require end-to-end connectivity."
  },
  {
    "id": "Modules 6-8-2",
    "module": "Modules 6-8",
    "number": 2,
    "topic": "WAN",
    "question": "2. A network administrator wants to examine the active NAT translations on a border router. Which command would perform the task?",
    "choices": [
      "Router# show ip nat translations",
      "Router# show ip nat statistics",
      "Router# clear ip nat translations",
      "Router# debug ip nat translations"
    ],
    "answers": [
      "Router# show ip nat translations"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.4",
    "gradable": true,
    "raw": "2. A network administrator wants to examine the active NAT translations on a border router. Which command would perform the task?\r\n\r\nRouter# show ip nat translations\r\nRouter# show ip nat statistics\r\nRouter# clear ip nat translations\r\nRouter# debug ip nat translations\r\nExplanation: Topic 6.4.4"
  },
  {
    "id": "Modules 6-8-3",
    "module": "Modules 6-8",
    "number": 3,
    "topic": "NAT",
    "question": "3. What are two tasks to perform when configuring static NAT? (Choose two.)",
    "choices": [
      "Configure a NAT pool.",
      "Create a mapping between the inside local and outside local addresses.",
      "Identify the participating interfaces as inside or outside interfaces.",
      "Define the inside global address on the server",
      "Define the outside global address."
    ],
    "answers": [
      "Create a mapping between the inside local and outside local addresses.",
      "Identify the participating interfaces as inside or outside interfaces."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.2\r\nThere is no server involved when using NAT. The outside global address will change for each destination the inside host will try to reach. A NAT pool is only configured for dynamic NAT implementations.",
    "gradable": true,
    "raw": "3. What are two tasks to perform when configuring static NAT? (Choose two.)\r\n\r\nConfigure a NAT pool.\r\nCreate a mapping between the inside local and outside local addresses.\r\nIdentify the participating interfaces as inside or outside interfaces.\r\nDefine the inside global address on the server\r\nDefine the outside global address.\r\nExplanation: Topic 6.4.2\r\nThere is no server involved when using NAT. The outside global address will change for each destination the inside host will try to reach. A NAT pool is only configured for dynamic NAT implementations."
  },
  {
    "id": "Modules 6-8-4",
    "module": "Modules 6-8",
    "number": 4,
    "topic": "NAT",
    "question": "4. What is a disadvantage of NAT?",
    "choices": [
      "There is no end-to-end addressing.",
      "The router does not need to alter the checksum of the IPv4 packets.​",
      "The internal hosts have to use a single public IPv4 address for external communication.",
      "The costs of readdressing hosts can be significant for a publicly addressed network.​"
    ],
    "answers": [
      "There is no end-to-end addressing."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.3.2",
    "gradable": true,
    "raw": "4. What is a disadvantage of NAT?\r\n\r\nThere is no end-to-end addressing.\r\nThe router does not need to alter the checksum of the IPv4 packets.​\r\nThe internal hosts have to use a single public IPv4 address for external communication.\r\nThe costs of readdressing hosts can be significant for a publicly addressed network.​\r\nExplanation: Topic 6.3.2"
  },
  {
    "id": "Modules 6-8-5",
    "module": "Modules 6-8",
    "number": 5,
    "topic": "NAT",
    "question": "5. Refer to the exhibit. From the perspective of R1, the NAT router, which address is the inside global address?",
    "choices": [
      "192.168.0.10",
      "192.168.0.1",
      "209.165.200.225",
      "209.165.200.254"
    ],
    "answers": [
      "209.165.200.225"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.4\r\nThere are four types of addresses in NAT terminology.\r\nInside local address\r\nInside global address\r\nOutside local address\r\nOutside global address\r\nThe inside global address of PC1 is the address that the ISP sees as the source address of packets, which in this example is the IP address on the serial interface of R1, 209.165.200.224.",
    "gradable": true,
    "raw": "5. Refer to the exhibit. From the perspective of R1, the NAT router, which address is the inside global address?\r\n\r\n\r\n\r\n192.168.0.10\r\n192.168.0.1\r\n209.165.200.225\r\n209.165.200.254\r\nExplanation: Topic 6.1.4\r\nThere are four types of addresses in NAT terminology.\r\nInside local address\r\nInside global address\r\nOutside local address\r\nOutside global address\r\nThe inside global address of PC1 is the address that the ISP sees as the source address of packets, which in this example is the IP address on the serial interface of R1, 209.165.200.224."
  },
  {
    "id": "Modules 6-8-6",
    "module": "Modules 6-8",
    "number": 6,
    "topic": "NAT",
    "question": "6. Refer to the exhibit. Given the commands as shown, how many hosts on the internal LAN off R1 can have simultaneous NAT translations on R1?",
    "choices": [
      "244",
      "10",
      "1",
      "255"
    ],
    "answers": [
      "1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.2.1\r\nThe NAT configuration on R1 is static NAT which translates a single inside IP address, 192.168.0.10 into a single public IP address, 209.165.200.255. If more hosts need translation, then a NAT pool of inside global address or overloading should be configured.",
    "gradable": true,
    "raw": "6. Refer to the exhibit. Given the commands as shown, how many hosts on the internal LAN off R1 can have simultaneous NAT translations on R1?\r\n\r\n\r\n\r\n\r\n244\r\n10\r\n1\r\n255\r\nExplanation: Topic 6.2.1\r\nThe NAT configuration on R1 is static NAT which translates a single inside IP address, 192.168.0.10 into a single public IP address, 209.165.200.255. If more hosts need translation, then a NAT pool of inside global address or overloading should be configured."
  },
  {
    "id": "Modules 6-8-7",
    "module": "Modules 6-8",
    "number": 7,
    "topic": "NAT",
    "question": "7. Refer to the exhibit. A network administrator has just configured address translation and is verifying the configuration. What three things can the administrator verify? (Choose three.)",
    "choices": [
      "A standard access list numbered 1 was used as part of the configuration process.",
      "Three addresses from the NAT pool are being used by hosts.",
      "Address translation is working.",
      "One port on the router is not participating in the address translation.",
      "The name of the NAT pool is refCount.",
      "Two types of NAT are enabled."
    ],
    "answers": [
      "A standard access list numbered 1 was used as part of the configuration process.",
      "Address translation is working.",
      "Two types of NAT are enabled."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.5.5\r\nThe show ip nat statistics, show ip nat translations, and debug ip nat commands are useful in determining if NAT is working and and also useful in troubleshooting problems that are associated with NAT. NAT is working, as shown by the hits and misses count. Because there are four misses, a problem might be evident. The standard access list numbered 1 is being used and the translation pool is named NAT as evidenced by the last line of the output. Both static NAT and NAT overload are used as seen in the Total translations line.",
    "gradable": true,
    "raw": "7. Refer to the exhibit. A network administrator has just configured address translation and is verifying the configuration. What three things can the administrator verify? (Choose three.)\r\n\r\n\r\n\r\nA standard access list numbered 1 was used as part of the configuration process.\r\nThree addresses from the NAT pool are being used by hosts.\r\nAddress translation is working.\r\nOne port on the router is not participating in the address translation.\r\nThe name of the NAT pool is refCount.\r\nTwo types of NAT are enabled.\r\nExplanation: Topic 6.5.5\r\nThe show ip nat statistics, show ip nat translations, and debug ip nat commands are useful in determining if NAT is working and and also useful in troubleshooting problems that are associated with NAT. NAT is working, as shown by the hits and misses count. Because there are four misses, a problem might be evident. The standard access list numbered 1 is being used and the translation pool is named NAT as evidenced by the last line of the output. Both static NAT and NAT overload are used as seen in the Total translations line."
  },
  {
    "id": "Modules 6-8-8",
    "module": "Modules 6-8",
    "number": 8,
    "topic": "NAT",
    "question": "8. Refer to the exhibit. NAT is configured on RT1 and RT2. The PC is sending a request to the web server. What IPv4 address is the source IP address in the packet between RT2 and the web server?",
    "choices": [
      "192.168.1.5",
      "203.0.113.10",
      "172.16.1.254",
      "172.16.1.10",
      "209.165.200.245",
      "192.0.2.2"
    ],
    "answers": [
      "209.165.200.245"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.4\r\nBecause the packet is between RT2 and the web server, the source IP address is the inside global address of PC, 209.165.200.245.",
    "gradable": true,
    "raw": "8. Refer to the exhibit. NAT is configured on RT1 and RT2. The PC is sending a request to the web server. What IPv4 address is the source IP address in the packet between RT2 and the web server?\r\n\r\n\r\n\r\n\r\nfreestar\r\n192.168.1.5\r\n203.0.113.10\r\n172.16.1.254\r\n172.16.1.10\r\n209.165.200.245\r\n192.0.2.2\r\nExplanation: Topic 6.1.4\r\nBecause the packet is between RT2 and the web server, the source IP address is the inside global address of PC, 209.165.200.245."
  },
  {
    "id": "Modules 6-8-9",
    "module": "Modules 6-8",
    "number": 9,
    "topic": "NAT",
    "question": "9. Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?",
    "choices": [
      "dynamic NAT with a pool of two public IP addresses",
      "PAT using an external interface",
      "static NAT with a NAT pool",
      "static NAT with one entry"
    ],
    "answers": [
      "PAT using an external interface"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.6.6\r\nThe output shows that there are two inside global addresses that are the same but that have different port numbers. The only time port numbers are displayed is when PAT is being used. The same output would be indicative of PAT that uses an address pool. PAT with an address pool is appropriate when more than 4,000 simultaneous translations are needed by the company.",
    "gradable": true,
    "raw": "9. Refer to the exhibit. Based on the output that is shown, what type of NAT has been implemented?\r\n\r\n\r\n\r\ndynamic NAT with a pool of two public IP addresses\r\nPAT using an external interface\r\nstatic NAT with a NAT pool\r\nstatic NAT with one entry\r\nExplanation: Topic 6.6.6\r\nThe output shows that there are two inside global addresses that are the same but that have different port numbers. The only time port numbers are displayed is when PAT is being used. The same output would be indicative of PAT that uses an address pool. PAT with an address pool is appropriate when more than 4,000 simultaneous translations are needed by the company."
  },
  {
    "id": "Modules 6-8-10",
    "module": "Modules 6-8",
    "number": 10,
    "topic": "NAT",
    "question": "10. Refer to the exhibit. From the perspective of users behind the NAT router, what type of NAT address is 209.165.201.1?",
    "choices": [
      "inside global",
      "outside global",
      "outside local",
      "inside local"
    ],
    "answers": [
      "outside global"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.4\r\nFrom the perspective of users behind NAT, inside global addresses are used by external users to reach internal hosts. Inside local addresses are the addresses assigned to internal hosts. Outside global addresses are the addresses of destinations on the external network. Outside local addresses are the actual private addresses of destination hosts behind other NAT devices.",
    "gradable": true,
    "raw": "10. Refer to the exhibit. From the perspective of users behind the NAT router, what type of NAT address is 209.165.201.1?\r\n\r\n\r\n\r\ninside global\r\noutside global\r\noutside local\r\ninside local\r\nExplanation: Topic 6.1.4\r\nFrom the perspective of users behind NAT, inside global addresses are used by external users to reach internal hosts. Inside local addresses are the addresses assigned to internal hosts. Outside global addresses are the addresses of destinations on the external network. Outside local addresses are the actual private addresses of destination hosts behind other NAT devices."
  },
  {
    "id": "Modules 6-8-11",
    "module": "Modules 6-8",
    "number": 11,
    "topic": "NAT",
    "question": "11. Refer to the exhibit. Static NAT is being configured to allow PC 1 access to the web server on the internal network. What two addresses are needed in place of A and B to complete the static NAT configuration? (Choose two.)",
    "choices": [
      "A = 209.165.201.2",
      "A = 10.1.0.13",
      "B = 209.165.201.7",
      "B = 10.0.254.5",
      "B = 209.165.201.1"
    ],
    "answers": [
      "A = 10.1.0.13",
      "B = 209.165.201.7"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.2\r\nStatic NAT is a one-to-one mapping between an inside local address and an inside global address. By using static NAT, external devices can initiate connections to internal devices by using the inside global addresses. The NAT devices will translate the inside global address to the inside local address of the target host.",
    "gradable": true,
    "raw": "11. Refer to the exhibit. Static NAT is being configured to allow PC 1 access to the web server on the internal network. What two addresses are needed in place of A and B to complete the static NAT configuration? (Choose two.)\r\n\r\n\r\n\r\nA = 209.165.201.2\r\nA = 10.1.0.13\r\nB = 209.165.201.7\r\nB = 10.0.254.5\r\nB = 209.165.201.1\r\nExplanation: Topic 6.4.2\r\nStatic NAT is a one-to-one mapping between an inside local address and an inside global address. By using static NAT, external devices can initiate connections to internal devices by using the inside global addresses. The NAT devices will translate the inside global address to the inside local address of the target host."
  },
  {
    "id": "Modules 6-8-12",
    "module": "Modules 6-8",
    "number": 12,
    "topic": "NAT",
    "question": "12. What is the purpose of the overload keyword in the ip nat inside source list 1 pool NAT_POOL overload command?",
    "choices": [
      "It allows many inside hosts to share one or a few inside global addresses.",
      "It allows a list of internal hosts to communicate with a specific group of external hosts.",
      "It allows external hosts to initiate sessions with internal hosts.",
      "It allows a pool of inside global addresses to be used by internal hosts."
    ],
    "answers": [
      "It allows many inside hosts to share one or a few inside global addresses."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.2.3\r\nDynamic NAT uses a pool of inside global addresses that are assigned to outgoing sessions. If there are more internal hosts than public addresses in the pool, then an administrator can enable port address translation with the addition of the overload keyword. With port address translation, many internal hosts can share a single inside global address because the NAT device will track the individual sessions by Layer 4 port number.",
    "gradable": true,
    "raw": "12. What is the purpose of the overload keyword in the ip nat inside source list 1 pool NAT_POOL overload command?\r\n\r\nIt allows many inside hosts to share one or a few inside global addresses.\r\nIt allows a list of internal hosts to communicate with a specific group of external hosts.\r\nIt allows external hosts to initiate sessions with internal hosts.\r\nIt allows a pool of inside global addresses to be used by internal hosts.\r\nExplanation: Topic 6.2.3\r\nDynamic NAT uses a pool of inside global addresses that are assigned to outgoing sessions. If there are more internal hosts than public addresses in the pool, then an administrator can enable port address translation with the addition of the overload keyword. With port address translation, many internal hosts can share a single inside global address because the NAT device will track the individual sessions by Layer 4 port number."
  },
  {
    "id": "Modules 6-8-13",
    "module": "Modules 6-8",
    "number": 13,
    "topic": "NAT",
    "question": "13. Refer to the exhibit. Which source address is being used by router R1 for packets being forwarded to the Internet?",
    "choices": [
      "10.6.15.2",
      "209.165.202.141",
      "198.51.100.3",
      "209.165.200.225"
    ],
    "answers": [
      "209.165.200.225"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.4\r\nThe source address for packets forwarded by the router to the Internet will be the inside global address of 209.165.200.225. This is the address that the internal addresses from the 10.6.15.0 network will be translated to by NAT.",
    "gradable": true,
    "raw": "13. Refer to the exhibit. Which source address is being used by router R1 for packets being forwarded to the Internet?\r\n\r\n\r\n\r\n\r\n10.6.15.2\r\n209.165.202.141\r\n198.51.100.3\r\n209.165.200.225\r\nExplanation: Topic 6.1.4\r\nThe source address for packets forwarded by the router to the Internet will be the inside global address of 209.165.200.225. This is the address that the internal addresses from the 10.6.15.0 network will be translated to by NAT."
  },
  {
    "id": "Modules 6-8-14",
    "module": "Modules 6-8",
    "number": 14,
    "topic": "NAT",
    "question": "14. Refer to the exhibit. The NAT configuration applied to the router is as follows:\n\nCopy\nERtr(config)# access-list 1 permit 10.0.0.0 0.255.255.255\nERtr(config)# ip nat pool corp 209.165.201.6 209.165.201.30 netmask 255.255.255.224\nERtr(config)# ip nat inside source list 1 pool corp overload\nERtr(config)# ip nat inside source static 10.10.10.55 209.165.201.4\nERtr(config)# interface gigabitethernet 0/0\nERtr(config-if)# ip nat inside\nERtr(config-if)# interface serial 0/0/0\nERtr(config-if)# ip nat outside\nBased on the configuration and the output shown, what can be determined about the NAT status within the organization?",
    "choices": [
      "Static NAT is working, but dynamic NAT is not.",
      "Dynamic NAT is working, but static NAT is not.",
      "Not enough information is given to determine if both static and dynamic NAT are working.",
      "NAT is working."
    ],
    "answers": [
      "Not enough information is given to determine if both static and dynamic NAT are working."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.5.5\r\nThere is not enough information given because the router might not be attached to the network yet, the interfaces might not have IP addresses assigned yet, or the command could have been issued in the middle of the night. The output does match the given configuration, so no typographical errors were made when the NAT commands were entered.",
    "gradable": true,
    "raw": "14. Refer to the exhibit. The NAT configuration applied to the router is as follows:\r\n\r\nCopy\r\nERtr(config)# access-list 1 permit 10.0.0.0 0.255.255.255\r\nERtr(config)# ip nat pool corp 209.165.201.6 209.165.201.30 netmask 255.255.255.224\r\nERtr(config)# ip nat inside source list 1 pool corp overload\r\nERtr(config)# ip nat inside source static 10.10.10.55 209.165.201.4\r\nERtr(config)# interface gigabitethernet 0/0\r\nERtr(config-if)# ip nat inside\r\nERtr(config-if)# interface serial 0/0/0\r\nERtr(config-if)# ip nat outside\r\nBased on the configuration and the output shown, what can be determined about the NAT status within the organization?\r\n\r\n\r\n\r\n\r\nfreestar\r\nStatic NAT is working, but dynamic NAT is not.\r\nDynamic NAT is working, but static NAT is not.\r\nNot enough information is given to determine if both static and dynamic NAT are working.\r\nNAT is working.\r\nExplanation: Topic 6.5.5\r\nThere is not enough information given because the router might not be attached to the network yet, the interfaces might not have IP addresses assigned yet, or the command could have been issued in the middle of the night. The output does match the given configuration, so no typographical errors were made when the NAT commands were entered."
  },
  {
    "id": "Modules 6-8-15",
    "module": "Modules 6-8",
    "number": 15,
    "topic": "VPN",
    "question": "15. Which situation describes data transmissions over a WAN connection?",
    "choices": [
      "A network administrator in the office remotely accesses a web server that is located in the data center at the edge of the campus.",
      "A manager sends an email to all employees in the department with offices that are located in several buildings.",
      "An employee prints a file through a networked printer that is located in another building.",
      "An employee shares a database file with a co-worker who is located in a branch office on the other side of the city."
    ],
    "answers": [
      "An employee shares a database file with a co-worker who is located in a branch office on the other side of the city."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.1.1\r\nWhen two offices across a city are communicating , it is most likely that the data transmissions are over some type of WAN connection. Data communications within a campus are typically over LAN connections.",
    "gradable": true,
    "raw": "15. Which situation describes data transmissions over a WAN connection?\r\n\r\nA network administrator in the office remotely accesses a web server that is located in the data center at the edge of the campus.\r\nA manager sends an email to all employees in the department with offices that are located in several buildings.\r\nAn employee prints a file through a networked printer that is located in another building.\r\nAn employee shares a database file with a co-worker who is located in a branch office on the other side of the city.\r\nExplanation: Topic 7.1.1\r\nWhen two offices across a city are communicating , it is most likely that the data transmissions are over some type of WAN connection. Data communications within a campus are typically over LAN connections."
  },
  {
    "id": "Modules 6-8-16",
    "module": "Modules 6-8",
    "number": 16,
    "topic": "VPN",
    "question": "16. Which two technologies are categorized as private WAN infrastructures? (Choose two.)",
    "choices": [
      "Frame Relay",
      "VPN",
      "MetroE",
      "DSL",
      "cable"
    ],
    "answers": [
      "Frame Relay",
      "MetroE"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.2.2\r\nPrivate WAN technologies include leased lines, dialup, ISDN, Frame Relay, ATM, Ethernet WAN (an example is MetroE), MPLS, and VSAT.",
    "gradable": true,
    "raw": "16. Which two technologies are categorized as private WAN infrastructures? (Choose two.)\r\n\r\nFrame Relay\r\nVPN\r\nMetroE\r\nDSL\r\ncable\r\nExplanation: Topic 7.2.2\r\nPrivate WAN technologies include leased lines, dialup, ISDN, Frame Relay, ATM, Ethernet WAN (an example is MetroE), MPLS, and VSAT."
  },
  {
    "id": "Modules 6-8-17",
    "module": "Modules 6-8",
    "number": 17,
    "topic": "VPN",
    "question": "17. Which network scenario will require the use of a WAN?",
    "choices": [
      "Employees need to connect to the corporate email server through a VPN while traveling.",
      "Employees need to access web pages that are hosted on the corporate web servers in the DMZ within their building.",
      "Employee workstations need to obtain dynamically assigned IP addresses.",
      "Employees in the branch office need to share files with the headquarters office that is located in a separate building on the same campus network."
    ],
    "answers": [
      "Employees need to connect to the corporate email server through a VPN while traveling."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.1.1\r\nWhen traveling employees need to connect to a corporate email server through a WAN connection, the VPN will create a secure tunnel between an employee laptop and the corporate network over the WAN connection. Obtaining dynamic IP addresses through DHCP is a function of LAN communication. Sharing files among separate buildings on a corporate campus is accomplished through the LAN infrastructure. A DMZ is a protected network inside the corporate LAN infrastructure.",
    "gradable": true,
    "raw": "17. Which network scenario will require the use of a WAN?\r\n\r\nEmployees need to connect to the corporate email server through a VPN while traveling.\r\nEmployees need to access web pages that are hosted on the corporate web servers in the DMZ within their building.\r\nEmployee workstations need to obtain dynamically assigned IP addresses.\r\nEmployees in the branch office need to share files with the headquarters office that is located in a separate building on the same campus network.\r\nExplanation: Topic 7.1.1\r\nWhen traveling employees need to connect to a corporate email server through a WAN connection, the VPN will create a secure tunnel between an employee laptop and the corporate network over the WAN connection. Obtaining dynamic IP addresses through DHCP is a function of LAN communication. Sharing files among separate buildings on a corporate campus is accomplished through the LAN infrastructure. A DMZ is a protected network inside the corporate LAN infrastructure."
  },
  {
    "id": "Modules 6-8-18",
    "module": "Modules 6-8",
    "number": 18,
    "topic": "VPN",
    "question": "18. What are two hashing algorithms used with IPsec AH to guarantee authenticity? (Choose two.)",
    "choices": [
      "SHA",
      "RSA",
      "DH",
      "MD5",
      "AES"
    ],
    "answers": [
      "SHA",
      "MD5"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.3.5\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms used to ensure that data is not intercepted and modified (data integrity and authenticity) are MD5 and SHA.",
    "gradable": true,
    "raw": "18. What are two hashing algorithms used with IPsec AH to guarantee authenticity? (Choose two.)\r\n\r\n\r\nfreestar\r\nSHA\r\nRSA\r\nDH\r\nMD5\r\nAES\r\nExplanation: Topic 8.3.5\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms used to ensure that data is not intercepted and modified (data integrity and authenticity) are MD5 and SHA."
  },
  {
    "id": "Modules 6-8-19",
    "module": "Modules 6-8",
    "number": 19,
    "topic": "VPN",
    "question": "19. What two algorithms can be part of an IPsec policy to provide encryption and hashing to protect interesting traffic? (Choose two.)",
    "choices": [
      "SHA",
      "RSA",
      "AES",
      "DH",
      "PSK"
    ],
    "answers": [
      "SHA",
      "AES"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.3.2\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two algorithms that can be used within an IPsec policy to protect interesting traffic are AES, which is an encryption protocol, and SHA, which is a hashing algorithm.",
    "gradable": true,
    "raw": "19. What two algorithms can be part of an IPsec policy to provide encryption and hashing to protect interesting traffic? (Choose two.)\r\n\r\nSHA\r\nRSA\r\nAES\r\nDH\r\nPSK\r\nExplanation: Topic 8.3.2\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two algorithms that can be used within an IPsec policy to protect interesting traffic are AES, which is an encryption protocol, and SHA, which is a hashing algorithm."
  },
  {
    "id": "Modules 6-8-20",
    "module": "Modules 6-8",
    "number": 20,
    "topic": "VPN",
    "question": "20. Which VPN solution allows the use of a web browser to establish a secure, remote-access VPN tunnel to the ASA?",
    "choices": [
      "client-based SSL",
      "site-to-site using an ACL",
      "clientless SSL",
      "site-to-site using a preshared key"
    ],
    "answers": [
      "clientless SSL"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.1\r\nWhen a web browser is used to securely access the corporate network, the browser must use a secure version of HTTP to provide SSL encryption. A VPN client is not required to be installed on the remote host, so a clientless SSL connection is used.",
    "gradable": true,
    "raw": "20. Which VPN solution allows the use of a web browser to establish a secure, remote-access VPN tunnel to the ASA?\r\n\r\nclient-based SSL\r\nsite-to-site using an ACL\r\nclientless SSL\r\nsite-to-site using a preshared key\r\nExplanation: Topic 8.2.1\r\nWhen a web browser is used to securely access the corporate network, the browser must use a secure version of HTTP to provide SSL encryption. A VPN client is not required to be installed on the remote host, so a clientless SSL connection is used."
  },
  {
    "id": "Modules 6-8-21",
    "module": "Modules 6-8",
    "number": 21,
    "topic": "VPN",
    "question": "21. Which IPsec security function provides assurance that the data received via a VPN has not been modified in transit?",
    "choices": [
      "integrity",
      "authentication",
      "confidentiality",
      "secure key exchange"
    ],
    "answers": [
      "integrity"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.3.5\r\nIntegrity is a function of IPsec and ensures data arrives unchanged at the destination through the use of a hash algorithm. Confidentiality is a function of IPsec and utilizes encryption to protect data transfers with a key. Authentication is a function of IPsec and provides specific access to users and devices with valid authentication factors. Secure key exchange is a function of IPsec and allows two peers to maintain their private key confidentiality while sharing their public key.",
    "gradable": true,
    "raw": "21. Which IPsec security function provides assurance that the data received via a VPN has not been modified in transit?\r\n\r\nintegrity\r\nauthentication\r\nconfidentiality\r\nsecure key exchange\r\nExplanation: Topic 8.3.5\r\nIntegrity is a function of IPsec and ensures data arrives unchanged at the destination through the use of a hash algorithm. Confidentiality is a function of IPsec and utilizes encryption to protect data transfers with a key. Authentication is a function of IPsec and provides specific access to users and devices with valid authentication factors. Secure key exchange is a function of IPsec and allows two peers to maintain their private key confidentiality while sharing their public key."
  },
  {
    "id": "Modules 6-8-22",
    "module": "Modules 6-8",
    "number": 22,
    "topic": "VPN",
    "question": "22. Which two types of VPNs are examples of enterprise-managed remote access VPNs? (Choose two.)",
    "choices": [
      "clientless SSL VPN",
      "client-based IPsec VPN",
      "IPsec VPN",
      "IPsec Virtual Tunnel Interface VPN",
      "GRE over IPsec VPN"
    ],
    "answers": [
      "clientless SSL VPN",
      "client-based IPsec VPN"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.1.4\r\nEnterprise managed VPNs can be deployed in two configurations:\r\n\r\nRemote Access VPN - This VPN is created dynamically when required to establish a secure connection between a client and a VPN server. Remote access VPNs include client-based IPsec VPNs and clientless SSL VPNs.\r\nSite-to-site VPN - This VPN is created when interconnecting devices are preconfigured with information to establish a secure tunnel. VPN traffic is encrypted only between the interconnecting devices, and internal hosts have no knowledge that a VPN is used. Site-to-site VPNs include IPsec, GRE over IPsec, Cisco Dynamic Multipoint (DMVPN), and IPsec Virtual Tunnel Interface (VTI) VPNs.",
    "gradable": true,
    "raw": "22. Which two types of VPNs are examples of enterprise-managed remote access VPNs? (Choose two.)\r\n\r\n\r\nfreestar\r\nclientless SSL VPN\r\nclient-based IPsec VPN\r\nIPsec VPN\r\nIPsec Virtual Tunnel Interface VPN\r\nGRE over IPsec VPN\r\nExplanation: Topic 8.1.4\r\nEnterprise managed VPNs can be deployed in two configurations:\r\n\r\nRemote Access VPN - This VPN is created dynamically when required to establish a secure connection between a client and a VPN server. Remote access VPNs include client-based IPsec VPNs and clientless SSL VPNs.\r\nSite-to-site VPN - This VPN is created when interconnecting devices are preconfigured with information to establish a secure tunnel. VPN traffic is encrypted only between the interconnecting devices, and internal hosts have no knowledge that a VPN is used. Site-to-site VPNs include IPsec, GRE over IPsec, Cisco Dynamic Multipoint (DMVPN), and IPsec Virtual Tunnel Interface (VTI) VPNs."
  },
  {
    "id": "Modules 6-8-23",
    "module": "Modules 6-8",
    "number": 23,
    "topic": "VPN",
    "question": "23. Which is a requirement of a site-to-site VPN?",
    "choices": [
      "It requires hosts to use VPN client software to encapsulate traffic.",
      "It requires the placement of a VPN server at the edge of the company network.",
      "It requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic.",
      "It requires a client/server architecture."
    ],
    "answers": [
      "It requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.3\r\nSite-to-site VPNs are static and are used to connect entire networks. Hosts have no knowledge of the VPN and send TCP/IP traffic to VPN gateways. The VPN gateway is responsible for encapsulating the traffic and forwarding it through the VPN tunnel to a peer gateway at the other end which decapsulates the traffic.",
    "gradable": true,
    "raw": "23. Which is a requirement of a site-to-site VPN?\r\n\r\nIt requires hosts to use VPN client software to encapsulate traffic.\r\nIt requires the placement of a VPN server at the edge of the company network.\r\nIt requires a VPN gateway at each end of the tunnel to encrypt and decrypt traffic.\r\nIt requires a client/server architecture.\r\nExplanation: Topic 8.2.3\r\nSite-to-site VPNs are static and are used to connect entire networks. Hosts have no knowledge of the VPN and send TCP/IP traffic to VPN gateways. The VPN gateway is responsible for encapsulating the traffic and forwarding it through the VPN tunnel to a peer gateway at the other end which decapsulates the traffic."
  },
  {
    "id": "Modules 6-8-24",
    "module": "Modules 6-8",
    "number": 24,
    "topic": "VPN",
    "question": "24. What is the function of the Diffie-Hellman algorithm within the IPsec framework?",
    "choices": [
      "guarantees message integrity",
      "allows peers to exchange shared keys",
      "provides authentication",
      "provides strong data encryption"
    ],
    "answers": [
      "allows peers to exchange shared keys"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.3.7\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. DH (Diffie-Hellman) is an algorithm used for key exchange. DH is a public key exchange method that allows two IPsec peers to establish a shared secret key over an insecure channel.",
    "gradable": true,
    "raw": "24. What is the function of the Diffie-Hellman algorithm within the IPsec framework?\r\n\r\nguarantees message integrity\r\nallows peers to exchange shared keys\r\nprovides authentication\r\nprovides strong data encryption\r\nExplanation: Topic 8.3.7\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. DH (Diffie-Hellman) is an algorithm used for key exchange. DH is a public key exchange method that allows two IPsec peers to establish a shared secret key over an insecure channel."
  },
  {
    "id": "Modules 6-8-25",
    "module": "Modules 6-8",
    "number": 25,
    "topic": "NAT",
    "question": "25. What does NAT overloading use to track multiple internal hosts that use one inside global address?",
    "choices": [
      "port numbers",
      "IP addresses",
      "autonomous system numbers",
      "MAC addresses"
    ],
    "answers": [
      "port numbers"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.2.3\r\nNAT overloading, also known as Port Address Translation (PAT), uses port numbers to differentiate between multiple internal hosts.",
    "gradable": true,
    "raw": "25. What does NAT overloading use to track multiple internal hosts that use one inside global address?\r\n\r\n\r\nfreestar\r\nport numbers\r\nIP addresses\r\nautonomous system numbers\r\nMAC addresses\r\nExplanation: Topic 6.2.3\r\nNAT overloading, also known as Port Address Translation (PAT), uses port numbers to differentiate between multiple internal hosts."
  },
  {
    "id": "Modules 6-8-26",
    "module": "Modules 6-8",
    "number": 26,
    "topic": "NAT",
    "question": "26. What type of address is 192.168.7.98?",
    "choices": [
      "public",
      "private"
    ],
    "answers": [
      "private"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "26. What type of address is 192.168.7.98?\r\n\r\npublic\r\nprivate\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-27",
    "module": "Modules 6-8",
    "number": 27,
    "topic": "NAT",
    "question": "27. Refer to the exhibit. R1 is configured for static NAT. What IP address will Internet hosts use to reach PC1?",
    "choices": [
      "192.168.0.1",
      "192.168.0.10",
      "209.165.201.1",
      "209.165.200.225"
    ],
    "answers": [
      "209.165.200.225"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.4\r\nIn static NAT a single inside local address, in this case 192.168.0.10, will be mapped to a single inside global address, in this case 209.165.200.225. Internet hosts will send packets to PC1 and use as a destination address the inside global address 209.165.200.225.",
    "gradable": true,
    "raw": "27. Refer to the exhibit. R1 is configured for static NAT. What IP address will Internet hosts use to reach PC1?\r\n\r\n\r\n\r\n192.168.0.1\r\n192.168.0.10\r\n209.165.201.1\r\n209.165.200.225\r\nExplanation: Topic 6.1.4\r\nIn static NAT a single inside local address, in this case 192.168.0.10, will be mapped to a single inside global address, in this case 209.165.200.225. Internet hosts will send packets to PC1 and use as a destination address the inside global address 209.165.200.225."
  },
  {
    "id": "Modules 6-8-28",
    "module": "Modules 6-8",
    "number": 28,
    "topic": "VPN",
    "question": "28. Which type of VPN uses the public key infrastructure and digital certificates?​",
    "choices": [
      "SSL VPN",
      "GRE over IPsec",
      "IPsec virtual tunnel interface",
      "dynamic multipoint VPN"
    ],
    "answers": [
      "SSL VPN"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.2",
    "gradable": true,
    "raw": "28. Which type of VPN uses the public key infrastructure and digital certificates?​\r\n\r\n\r\nfreestar\r\nSSL VPN\r\nGRE over IPsec\r\nIPsec virtual tunnel interface\r\ndynamic multipoint VPN\r\nExplanation: Topic 8.2.2"
  },
  {
    "id": "Modules 6-8-29",
    "module": "Modules 6-8",
    "number": 29,
    "topic": "WAN",
    "question": "29. Which two WAN infrastructure services are examples of private connections? (Choose two.)",
    "choices": [
      "cable",
      "DSL",
      "Frame Relay",
      "T1/E1",
      "wireless"
    ],
    "answers": [
      "Frame Relay",
      "T1/E1"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.3.1\r\nPrivate WANs can use T1/E1, T3/E3, PSTN, ISDN, Metro Ethernet, MPLS, Frame Relay, ATM, or VSAT technology.",
    "gradable": true,
    "raw": "29. Which two WAN infrastructure services are examples of private connections? (Choose two.)\r\n\r\ncable\r\nDSL\r\nFrame Relay\r\nT1/E1\r\nwireless\r\nExplanation: Topic 7.3.1\r\nPrivate WANs can use T1/E1, T3/E3, PSTN, ISDN, Metro Ethernet, MPLS, Frame Relay, ATM, or VSAT technology."
  },
  {
    "id": "Modules 6-8-30",
    "module": "Modules 6-8",
    "number": 30,
    "topic": "WAN",
    "question": "30. Which two statements about the relationship between LANs and WANs are true? (Choose two.)",
    "choices": [
      "Both LANs and WANs connect end devices.",
      "WANs are typically operated through multiple ISPs, but LANs are typically operated by single organizations or individuals.",
      "WANs must be publicly-owned, but LANs can be owned by either public or private entities.",
      "WANs connect LANs at slower speed bandwidth than LANs connect their internal end devices.​",
      "LANs connect multiple WANs together."
    ],
    "answers": [
      "Both LANs and WANs connect end devices.",
      "WANs connect LANs at slower speed bandwidth than LANs connect their internal end devices.​"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.1.1\r\nAlthough LANs and WANs can employ the same network media and intermediary devices, they serve very different areas and purposes. The administrative and geographical scope of a WAN is larger than that of a LAN. Bandwidth speeds are slower on WANs because of their increased complexity. The Internet is a network of networks, which can function under either public or private management.",
    "gradable": true,
    "raw": "30. Which two statements about the relationship between LANs and WANs are true? (Choose two.)\r\n\r\nBoth LANs and WANs connect end devices.\r\nWANs are typically operated through multiple ISPs, but LANs are typically operated by single organizations or individuals.\r\nWANs must be publicly-owned, but LANs can be owned by either public or private entities.\r\nWANs connect LANs at slower speed bandwidth than LANs connect their internal end devices.​\r\nLANs connect multiple WANs together.\r\nExplanation: Topic 7.1.1\r\nAlthough LANs and WANs can employ the same network media and intermediary devices, they serve very different areas and purposes. The administrative and geographical scope of a WAN is larger than that of a LAN. Bandwidth speeds are slower on WANs because of their increased complexity. The Internet is a network of networks, which can function under either public or private management."
  },
  {
    "id": "Modules 6-8-31",
    "module": "Modules 6-8",
    "number": 31,
    "topic": "VPN",
    "question": "31. Which statement describes an important characteristic of a site-to-site VPN?",
    "choices": [
      "It must be statically set up.",
      "It is ideally suited for use by mobile workers.",
      "It requires using a VPN client on the host PC.",
      "After the initial connection is established, it can dynamically change connection information.",
      "It is commonly implemented over dialup and cable modem networks."
    ],
    "answers": [
      "It must be statically set up."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.1.3\r\nA site-to-site VPN is created between the network devices of two separate networks. The VPN is static and stays established. The internal hosts of the two networks have no knowledge of the VPN.",
    "gradable": true,
    "raw": "31. Which statement describes an important characteristic of a site-to-site VPN?\r\n\r\nIt must be statically set up.\r\nIt is ideally suited for use by mobile workers.\r\nIt requires using a VPN client on the host PC.\r\nAfter the initial connection is established, it can dynamically change connection information.\r\nIt is commonly implemented over dialup and cable modem networks.\r\nExplanation: Topic 8.1.3\r\nA site-to-site VPN is created between the network devices of two separate networks. The VPN is static and stays established. The internal hosts of the two networks have no knowledge of the VPN."
  },
  {
    "id": "Modules 6-8-32",
    "module": "Modules 6-8",
    "number": 32,
    "topic": "VPN",
    "question": "32. How is \"tunneling\" accomplished in a VPN?",
    "choices": [
      "New headers from one or more VPN protocols encapsulate the original packets.",
      "All packets between two hosts are assigned to a single physical medium to ensure that the packets are kept private.",
      "Packets are disguised to look like other types of traffic so that they will be ignored by potential attackers.",
      "A dedicated circuit is established between the source and destination devices for the duration of the connection."
    ],
    "answers": [
      "New headers from one or more VPN protocols encapsulate the original packets."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.4\r\nPackets in a VPN are encapsulated with the headers from one or more VPN protocols before being sent across the third party network. This is referred to as \"tunneling\". These outer headers can be used to route the packets, authenticate the source, and prevent unauthorized users from reading the contents of the packets.",
    "gradable": true,
    "raw": "32. How is \"tunneling\" accomplished in a VPN?\r\n\r\n\r\nfreestar\r\nNew headers from one or more VPN protocols encapsulate the original packets.\r\nAll packets between two hosts are assigned to a single physical medium to ensure that the packets are kept private.\r\nPackets are disguised to look like other types of traffic so that they will be ignored by potential attackers.\r\nA dedicated circuit is established between the source and destination devices for the duration of the connection.\r\nExplanation: Topic 8.2.4\r\nPackets in a VPN are encapsulated with the headers from one or more VPN protocols before being sent across the third party network. This is referred to as \"tunneling\". These outer headers can be used to route the packets, authenticate the source, and prevent unauthorized users from reading the contents of the packets."
  },
  {
    "id": "Modules 6-8-33",
    "module": "Modules 6-8",
    "number": 33,
    "topic": "VPN",
    "question": "33. Which statement describes a VPN?",
    "choices": [
      "VPNs use open source virtualization software to create the tunnel through the Internet.",
      "VPNs use logical connections to create public networks through the Internet.",
      "VPNs use dedicated physical connections to transfer data between remote users.",
      "VPNs use virtual connections to create a private network through a public network."
    ],
    "answers": [
      "VPNs use virtual connections to create a private network through a public network."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.1.1\r\nA VPN is a private network that is created over a public network. Instead of using dedicated physical connections, a VPN uses virtual connections routed through a public network between two network devices.",
    "gradable": true,
    "raw": "33. Which statement describes a VPN?\r\n\r\nVPNs use open source virtualization software to create the tunnel through the Internet.\r\nVPNs use logical connections to create public networks through the Internet.\r\nVPNs use dedicated physical connections to transfer data between remote users.\r\nVPNs use virtual connections to create a private network through a public network.\r\nExplanation: Topic 8.1.1\r\nA VPN is a private network that is created over a public network. Instead of using dedicated physical connections, a VPN uses virtual connections routed through a public network between two network devices."
  },
  {
    "id": "Modules 6-8-34",
    "module": "Modules 6-8",
    "number": 34,
    "topic": "WAN",
    "question": "34. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.\nWhat problem is causing PC-A to be unable to communicate with the Internet?",
    "choices": [
      "Modules 6 – 8: WAN Concepts",
      "The ip nat inside source command refers to the wrong interface.",
      "The NAT interfaces are not correctly assigned.",
      "The static route should not reference the interface, but the outside address instead.",
      "The access list used in the NAT process is referencing the wrong subnet.",
      "This router should be configured to use static NAT instead of PAT."
    ],
    "answers": [
      "The NAT interfaces are not correctly assigned."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.5.5\r\nThe output of show ip nat statistics shows that the inside interface is FastEthernet0/0 but that no interface has been designated as the outside interface. This can be fixed by adding the command ip nat outside to interface Serial0/0/0.",
    "gradable": true,
    "raw": "34. Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.\r\nWhat problem is causing PC-A to be unable to communicate with the Internet?\r\n\r\n\r\nIcon\r\nModules 6 – 8: WAN Concepts\r\n 1 file(s)  72.97 KB\r\nThe ip nat inside source command refers to the wrong interface.\r\nThe NAT interfaces are not correctly assigned.\r\nThe static route should not reference the interface, but the outside address instead.\r\nThe access list used in the NAT process is referencing the wrong subnet.\r\nThis router should be configured to use static NAT instead of PAT.\r\nExplanation: Topic 6.5.5\r\nThe output of show ip nat statistics shows that the inside interface is FastEthernet0/0 but that no interface has been designated as the outside interface. This can be fixed by adding the command ip nat outside to interface Serial0/0/0."
  },
  {
    "id": "Modules 6-8-35",
    "module": "Modules 6-8",
    "number": 35,
    "topic": "NAT",
    "question": "35. What type of address is 64.100.190.189?",
    "choices": [
      "public",
      "private"
    ],
    "answers": [
      "public"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.5.5\r\nThe output of show ip nat statistics shows that the inside interface is FastEthernet0/0 but that no interface has been designated as the outside interface. This can be fixed by adding the command ip nat outside to interface Serial0/0/0.",
    "gradable": true,
    "raw": "35. What type of address is 64.100.190.189?\r\n\r\npublic\r\nprivate\r\nExplanation: Topic 6.5.5\r\nThe output of show ip nat statistics shows that the inside interface is FastEthernet0/0 but that no interface has been designated as the outside interface. This can be fixed by adding the command ip nat outside to interface Serial0/0/0."
  },
  {
    "id": "Modules 6-8-36",
    "module": "Modules 6-8",
    "number": 36,
    "topic": "VPN",
    "question": "36. Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?",
    "choices": [
      "MPLS VPN",
      "IPsec virtual tunnel interface",
      "dynamic multipoint VPN",
      "GRE over IPsec"
    ],
    "answers": [
      "IPsec virtual tunnel interface"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.6\r\nThe output of show ip nat statistics shows that the inside interface is FastEthernet0/0 but that no interface has been designated as the outside interface. This can be fixed by adding the command ip nat outside to interface Serial0/0/0.",
    "gradable": true,
    "raw": "36. Which type of VPN routes packets through virtual tunnel interfaces for encryption and forwarding?\r\n\r\n\r\nfreestar\r\nMPLS VPN\r\nIPsec virtual tunnel interface\r\ndynamic multipoint VPN\r\nGRE over IPsec\r\nExplanation: Topic 8.2.6\r\nThe output of show ip nat statistics shows that the inside interface is FastEthernet0/0 but that no interface has been designated as the outside interface. This can be fixed by adding the command ip nat outside to interface Serial0/0/0."
  },
  {
    "id": "Modules 6-8-37",
    "module": "Modules 6-8",
    "number": 37,
    "topic": "WAN",
    "question": "37. Match the scenario to the WAN solution. (Not all options are used.)",
    "choices": [
      "37. Match the scenario to the WAN solution. (Not all options are used.)"
    ],
    "answers": [],
    "matching": {
      "targets": [
        "A company has a headquarters and four remote locations. The headquarters site will require more bandwidth than the four remote sites.",
        "A company requires higher download speeds than upload speeds and wants to use existing phone lines.",
        "A company would like guaranteed bandwidth using a point-to-point link that requires minimal expertise to install and maintain.",
        "A teleworker would like to bundle the Internet connection with other phone and TV services.",
        "A multisite college wants to connect using Ethernet technology between the sites."
      ],
      "options": [
        "cable",
        "DSL",
        "Frame Relay",
        "MetroE",
        "T1",
        "VSAT"
      ],
      "answers": {
        "A company has a headquarters and four remote locations. The headquarters site will require more bandwidth than the four remote sites.": "Frame Relay",
        "A company requires higher download speeds than upload speeds and wants to use existing phone lines.": "DSL",
        "A company would like guaranteed bandwidth using a point-to-point link that requires minimal expertise to install and maintain.": "T1",
        "A teleworker would like to bundle the Internet connection with other phone and TV services.": "cable",
        "A multisite college wants to connect using Ethernet technology between the sites.": "MetroE"
      }
    },
    "explanation": "Explanation: Topic 7.3.2",
    "gradable": true,
    "raw": "37. Match the scenario to the WAN solution. (Not all options are used.)\r\n\r\n\r\n\r\nExplanation: Topic 7.3.2"
  },
  {
    "id": "Modules 6-8-38",
    "module": "Modules 6-8",
    "number": 38,
    "topic": "NAT",
    "question": "38. Question as presented:",
    "choices": [
      "Refer to the exhibit. The PC is sending a packet to the Server on the remote network. Router R1 is performing NAT overload. From the perspective of the PC, match the NAT address type with the correct IP address. (Not all options are used.)"
    ],
    "answers": [],
    "matching": {
      "targets": [
        "Inside global",
        "Inside local",
        "Outside global"
      ],
      "options": [
        "10.130.5.76",
        "203.0.113.5",
        "192.0.2.1"
      ],
      "answers": {
        "Inside global": "192.0.2.1",
        "Inside local": "10.130.5.76",
        "Outside global": "203.0.113.5"
      }
    },
    "explanation": "Explanation: Topic 6.1.4\r\nThe inside local address is the private IP address of the source or the PC in this instance. The inside global address is the translated address of the source or the address as seen by the outside device. Since the PC is using the outside address of the R1 router, the inside global address is 192.0.2.1. The outside addressing is simply the address of the server or 203.0.113.5.",
    "gradable": true,
    "raw": "38. Question as presented:\r\n\r\nRefer to the exhibit. The PC is sending a packet to the Server on the remote network. Router R1 is performing NAT overload. From the perspective of the PC, match the NAT address type with the correct IP address. (Not all options are used.)\r\n\r\n\r\n\r\nExplanation: Topic 6.1.4\r\nThe inside local address is the private IP address of the source or the PC in this instance. The inside global address is the translated address of the source or the address as seen by the outside device. Since the PC is using the outside address of the R1 router, the inside global address is 192.0.2.1. The outside addressing is simply the address of the server or 203.0.113.5."
  },
  {
    "id": "Modules 6-8-39",
    "module": "Modules 6-8",
    "number": 39,
    "topic": "NAT",
    "question": "39. Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?",
    "choices": [
      "Interface Fa0/0 should be configured with the command no ip nat inside.",
      "Interface S0/0/0 should be configured with the command ip nat outside.",
      "R1 should be configured with the command ip nat inside source static 209.165.200.200 192.168.11.11.",
      "R1 should be configured with the command ip nat inside source static 209.165.200.1 192.168.11.11."
    ],
    "answers": [
      "Interface S0/0/0 should be configured with the command ip nat outside."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.2\r\nIn order for NAT translations to work properly, both an inside and outside interface must be configured for NAT translation on the router.",
    "gradable": true,
    "raw": "39. Refer to the exhibit. What has to be done in order to complete the static NAT configuration on R1?\r\n\r\n\r\n\r\nInterface Fa0/0 should be configured with the command no ip nat inside.\r\nInterface S0/0/0 should be configured with the command ip nat outside.\r\nR1 should be configured with the command ip nat inside source static 209.165.200.200 192.168.11.11.\r\nR1 should be configured with the command ip nat inside source static 209.165.200.1 192.168.11.11.\r\nExplanation: Topic 6.4.2\r\nIn order for NAT translations to work properly, both an inside and outside interface must be configured for NAT translation on the router."
  },
  {
    "id": "Modules 6-8-40",
    "module": "Modules 6-8",
    "number": 40,
    "topic": "NAT",
    "question": "40. In NAT terms, what address type refers to the globally routable IPv4 address of a destination host on the Internet?",
    "choices": [
      "outside global",
      "inside global",
      "outside local",
      "inside local"
    ],
    "answers": [
      "outside global"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.4\r\nFrom the perspective of a NAT device, inside global addresses are used by external users to reach internal hosts. Inside local addresses are the addresses assigned to internal hosts. Outside global addresses are the addresses of destinations on the external network. Outside local addresses are the actual private addresses of destination hosts behind other NAT devices.",
    "gradable": true,
    "raw": "40. In NAT terms, what address type refers to the globally routable IPv4 address of a destination host on the Internet?\r\n\r\n\r\nfreestar\r\noutside global\r\ninside global\r\noutside local\r\ninside local\r\nExplanation: Topic 6.1.4\r\nFrom the perspective of a NAT device, inside global addresses are used by external users to reach internal hosts. Inside local addresses are the addresses assigned to internal hosts. Outside global addresses are the addresses of destinations on the external network. Outside local addresses are the actual private addresses of destination hosts behind other NAT devices."
  },
  {
    "id": "Modules 6-8-41",
    "module": "Modules 6-8",
    "number": 41,
    "topic": "NAT",
    "question": "41. Refer to the exhibit. Which two statements are correct based on the output as shown in the exhibit? (Choose two.)",
    "choices": [
      "The output is the result of the show ip nat translations command.",
      "The host with the address 209.165.200.235 will respond to requests by using a source address of 192.168.10.10.",
      "The output is the result of the show ip nat statistics command.",
      "Traffic with the destination address of a public web server will be sourced from the IP of 192.168.1.10.",
      "The host with the address 209.165.200.235 will respond to requests by using a source address of 209.165.200.235."
    ],
    "answers": [
      "The output is the result of the show ip nat translations command.",
      "The host with the address 209.165.200.235 will respond to requests by using a source address of 209.165.200.235."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.4\r\nThe output displayed in the exhibit is the result of the show ip nat translations command. Static NAT entries are always present in the NAT table, while dynamic entries will eventually time out.",
    "gradable": true,
    "raw": "41. Refer to the exhibit. Which two statements are correct based on the output as shown in the exhibit? (Choose two.)\r\n\r\n\r\n\r\nThe output is the result of the show ip nat translations command.\r\nThe host with the address 209.165.200.235 will respond to requests by using a source address of 192.168.10.10.\r\nThe output is the result of the show ip nat statistics command.\r\nTraffic with the destination address of a public web server will be sourced from the IP of 192.168.1.10.\r\nThe host with the address 209.165.200.235 will respond to requests by using a source address of 209.165.200.235.\r\nExplanation: Topic 6.4.4\r\nThe output displayed in the exhibit is the result of the show ip nat translations command. Static NAT entries are always present in the NAT table, while dynamic entries will eventually time out."
  },
  {
    "id": "Modules 6-8-42",
    "module": "Modules 6-8",
    "number": 42,
    "topic": "VPN",
    "question": "42. Which circumstance would result in an enterprise deciding to implement a corporate WAN?",
    "choices": [
      "when the enterprise decides to secure its corporate LAN",
      "when its employees become distributed across many branch locations",
      "when the number of employees exceeds the capacity of the LAN",
      "when the network will span multiple buildings"
    ],
    "answers": [
      "when its employees become distributed across many branch locations"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.1.5\r\nWANs cover a greater geographic area than LANs do, so having employees distributed across many locations would require the implementation of WAN technologies to connect those locations. Customers will access corporate web services via a public WAN that is implemented by a service provider, not by the enterprise itself. When employee numbers grow, the LAN has to expand as well. A WAN is not required unless the employees are in remote locations. LAN security is not related to the decision to implement a WAN.",
    "gradable": true,
    "raw": "42. Which circumstance would result in an enterprise deciding to implement a corporate WAN?\r\n\r\nwhen the enterprise decides to secure its corporate LAN\r\nwhen its employees become distributed across many branch locations\r\nwhen the number of employees exceeds the capacity of the LAN\r\nwhen the network will span multiple buildings\r\nExplanation: Topic 7.1.5\r\nWANs cover a greater geographic area than LANs do, so having employees distributed across many locations would require the implementation of WAN technologies to connect those locations. Customers will access corporate web services via a public WAN that is implemented by a service provider, not by the enterprise itself. When employee numbers grow, the LAN has to expand as well. A WAN is not required unless the employees are in remote locations. LAN security is not related to the decision to implement a WAN."
  },
  {
    "id": "Modules 6-8-43",
    "module": "Modules 6-8",
    "number": 43,
    "topic": "VPN",
    "question": "43. What is the function of the Hashed Message Authentication Code (HMAC) algorithm in setting up an IPsec VPN?",
    "choices": [
      "protects IPsec keys during session negotiation",
      "authenticates the IPsec peers",
      "creates a secure channel for key negotiation",
      "guarantees message integrity"
    ],
    "answers": [
      "guarantees message integrity"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.3.5\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. The Hashed Message Authentication Code (HMAC) is a data integrity algorithm that uses a hash value to guarantee the integrity of a message.",
    "gradable": true,
    "raw": "43. What is the function of the Hashed Message Authentication Code (HMAC) algorithm in setting up an IPsec VPN?\r\n\r\nprotects IPsec keys during session negotiation\r\nauthenticates the IPsec peers\r\ncreates a secure channel for key negotiation\r\nguarantees message integrity\r\nExplanation: Topic 8.3.5\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. The Hashed Message Authentication Code (HMAC) is a data integrity algorithm that uses a hash value to guarantee the integrity of a message."
  },
  {
    "id": "Modules 6-8-44",
    "module": "Modules 6-8",
    "number": 44,
    "topic": "VPN",
    "question": "44. What algorithm is used with IPsec to provide data confidentiality?",
    "choices": [
      "Diffie-Hellman",
      "SHA",
      "MD5",
      "RSA",
      "AES"
    ],
    "answers": [
      "AES"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.3.4\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms that are used to ensure that data is not intercepted and modified (data integrity) are MD5 and SHA. AES is an encryption protocol and provides data confidentiality. DH (Diffie-Hellman) is an algorithm that is used for key exchange. RSA is an algorithm that is used for authentication.",
    "gradable": true,
    "raw": "44. What algorithm is used with IPsec to provide data confidentiality?\r\n\r\nDiffie-Hellman\r\nSHA\r\nMD5\r\nRSA\r\nAES\r\nExplanation: Topic 8.3.4\r\nThe IPsec framework uses various protocols and algorithms to provide data confidentiality, data integrity, authentication, and secure key exchange. Two popular algorithms that are used to ensure that data is not intercepted and modified (data integrity) are MD5 and SHA. AES is an encryption protocol and provides data confidentiality. DH (Diffie-Hellman) is an algorithm that is used for key exchange. RSA is an algorithm that is used for authentication."
  },
  {
    "id": "Modules 6-8-45",
    "module": "Modules 6-8",
    "number": 45,
    "topic": "VPN",
    "question": "45. Which two technologies provide enterprise-managed VPN solutions? (Choose two.)",
    "choices": [
      "remote access VPN",
      "Frame Relay",
      "Layer 2 MPLS VPN",
      "site-to-site VPN",
      "Layer 3 MPLS VPN"
    ],
    "answers": [
      "remote access VPN",
      "site-to-site VPN"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.1.4\r\nVPNs can be managed and deployed as either of two types:\r\n\r\nEnterprise VPNs – Enterprise-managed VPNs are a common solution for securing enterprise traffic across the internet. Site-to-site and remote access VPNs are examples of enterprise managed VPNs.\r\nService Provider VPNs – Service provider managed VPNs are created and managed over the provider network. Layer 2 and Layer 3 MPLS are examples of service provider managed VPNs. Other legacy WAN solutions include Frame Relay and ATM VPNs.",
    "gradable": true,
    "raw": "45. Which two technologies provide enterprise-managed VPN solutions? (Choose two.)\r\n\r\nremote access VPN\r\nFrame Relay\r\nLayer 2 MPLS VPN\r\nsite-to-site VPN\r\nLayer 3 MPLS VPN\r\nExplanation: Topic 8.1.4\r\nVPNs can be managed and deployed as either of two types:\r\n\r\nEnterprise VPNs – Enterprise-managed VPNs are a common solution for securing enterprise traffic across the internet. Site-to-site and remote access VPNs are examples of enterprise managed VPNs.\r\nService Provider VPNs – Service provider managed VPNs are created and managed over the provider network. Layer 2 and Layer 3 MPLS are examples of service provider managed VPNs. Other legacy WAN solutions include Frame Relay and ATM VPNs."
  },
  {
    "id": "Modules 6-8-46",
    "module": "Modules 6-8",
    "number": 46,
    "topic": "VPN",
    "question": "46. Which two end points can be on the other side of an ASA site-to-site VPN? (Choose two.)",
    "choices": [
      "DSL switch",
      "router",
      "another ASA",
      "multilayer switch",
      "Frame Relay switch"
    ],
    "answers": [
      "router",
      "another ASA"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.1.1\r\nIn a site-to-site VPN, end hosts send and receive normal unencrypted TCP/IP traffic through a VPN terminating device, typically called a VPN gateway. A VPN gateway device could be a router or a firewall. A Cisco Adaptive Security Appliance (ASA) is a standalone firewall device that combines firewall, VPN concentrator, and intrusion prevention functionality into one software image.",
    "gradable": true,
    "raw": "46. Which two end points can be on the other side of an ASA site-to-site VPN? (Choose two.)\r\n\r\n\r\nfreestar\r\nDSL switch\r\nrouter\r\nanother ASA\r\nmultilayer switch\r\nFrame Relay switch\r\nExplanation: Topic 8.1.1\r\nIn a site-to-site VPN, end hosts send and receive normal unencrypted TCP/IP traffic through a VPN terminating device, typically called a VPN gateway. A VPN gateway device could be a router or a firewall. A Cisco Adaptive Security Appliance (ASA) is a standalone firewall device that combines firewall, VPN concentrator, and intrusion prevention functionality into one software image."
  },
  {
    "id": "Modules 6-8-47",
    "module": "Modules 6-8",
    "number": 47,
    "topic": "NAT",
    "question": "47. Refer to the exhibit. A network administrator is viewing the output from the command show ip nat translations. Which statement correctly describes the NAT translation that is occurring on router RT2?​",
    "choices": [
      "The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT.",
      "The traffic from a source IPv4 address of 192.0.2.88 is being translated by router RT2 to reach a destination IPv4 address of 192.168.254.253.",
      "The traffic from a source IPv4 public address that originates traffic on the internet would be able to reach private internal IPv4 addresses​.",
      "The traffic from a source IPv4 address of 192.168.2.20 is being translated by router RT2 to reach a destination IPv4 address of 192.0.2.254."
    ],
    "answers": [
      "The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.4\r\nBecause no outside local or outside global address is referenced, the traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by using static NAT. In the output from the command show ip nat translations, the inside local IP address of 192.168.2.20 is being translated into an outside IP address of 192.0.2.254 so that the traffic can cross the public network. A public IPv4 device can connect to the private IPv4 device 192.168.254.253 by targeting the destination IPv4 address of 192.0.2.88.",
    "gradable": true,
    "raw": "47. Refer to the exhibit. A network administrator is viewing the output from the command show ip nat translations. Which statement correctly describes the NAT translation that is occurring on router RT2?​\r\n\r\n\r\n\r\nThe traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT.\r\nThe traffic from a source IPv4 address of 192.0.2.88 is being translated by router RT2 to reach a destination IPv4 address of 192.168.254.253.\r\nThe traffic from a source IPv4 public address that originates traffic on the internet would be able to reach private internal IPv4 addresses​.\r\nThe traffic from a source IPv4 address of 192.168.2.20 is being translated by router RT2 to reach a destination IPv4 address of 192.0.2.254.\r\nExplanation: Topic 6.4.4\r\nBecause no outside local or outside global address is referenced, the traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by using static NAT. In the output from the command show ip nat translations, the inside local IP address of 192.168.2.20 is being translated into an outside IP address of 192.0.2.254 so that the traffic can cross the public network. A public IPv4 device can connect to the private IPv4 device 192.168.254.253 by targeting the destination IPv4 address of 192.0.2.88."
  },
  {
    "id": "Modules 6-8-48",
    "module": "Modules 6-8",
    "number": 48,
    "topic": "NAT",
    "question": "48. What type of address is 10.100.126.126?",
    "choices": [
      "private",
      "public"
    ],
    "answers": [
      "private"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "48. What type of address is 10.100.126.126?\r\n\r\nprivate\r\npublic\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-49",
    "module": "Modules 6-8",
    "number": 49,
    "topic": "VPN",
    "question": "49. Which type of VPN connects using the Transport Layer Security (TLS) feature?",
    "choices": [
      "SSL VPN",
      "MPLS VPN",
      "IPsec virtual tunnel interface",
      "dynamic multipoint VPN"
    ],
    "answers": [
      "SSL VPN"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.2\r\nWhen a client negotiates an SSL VPN connection with the VPN gateway, it connects using Transport Layer Security (TLS). TLS is the newer version of SSL and is sometimes expressed as SSL/TLS. The two terms are often used interchangeably.",
    "gradable": true,
    "raw": "49. Which type of VPN connects using the Transport Layer Security (TLS) feature?\r\n\r\n\r\nfreestar\r\nSSL VPN\r\nMPLS VPN\r\nIPsec virtual tunnel interface\r\ndynamic multipoint VPN\r\nExplanation: Topic 8.2.2\r\nWhen a client negotiates an SSL VPN connection with the VPN gateway, it connects using Transport Layer Security (TLS). TLS is the newer version of SSL and is sometimes expressed as SSL/TLS. The two terms are often used interchangeably."
  },
  {
    "id": "Modules 6-8-50",
    "module": "Modules 6-8",
    "number": 50,
    "topic": "VPN",
    "question": "50. Which two end points can be on the other side of an ASA site-to-site VPN configured using ASDM? (Choose two.)",
    "choices": [
      "DSL switch",
      "ISR router",
      "another ASA",
      "multilayer switch",
      "Frame Relay switch"
    ],
    "answers": [
      "ISR router",
      "another ASA"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.3\r\nASDM supports creating an ASA site-to-site VPN between two ASAs or between an ASA and an ISR router.",
    "gradable": true,
    "raw": "50. Which two end points can be on the other side of an ASA site-to-site VPN configured using ASDM? (Choose two.)\r\n\r\nDSL switch\r\nISR router\r\nanother ASA\r\nmultilayer switch\r\nFrame Relay switch\r\nExplanation: Topic 8.2.3\r\nASDM supports creating an ASA site-to-site VPN between two ASAs or between an ASA and an ISR router."
  },
  {
    "id": "Modules 6-8-51",
    "module": "Modules 6-8",
    "number": 51,
    "topic": "VPN",
    "question": "51. Which protocol creates a virtual point-to-point connection to tunnel unencrypted traffic between Cisco routers from a variety of protocols?",
    "choices": [
      "IKE",
      "IPsec",
      "OSPF",
      "GRE"
    ],
    "answers": [
      "GRE"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.4\r\nGeneric Routing Encapsulation (GRE) is a tunneling protocol developed by Cisco that encapsulates multiprotocol traffic between remote Cisco routers. GRE does not encrypt data. OSPF is a open source routing protocol. IPsec is a suite of protocols that allow for the exchange of information that can be encrypted and verified. Internet Key Exchange (IKE) is a key management standard used with IPsec.",
    "gradable": true,
    "raw": "51. Which protocol creates a virtual point-to-point connection to tunnel unencrypted traffic between Cisco routers from a variety of protocols?\r\n\r\nIKE\r\nIPsec\r\nOSPF\r\nGRE\r\nExplanation: Topic 8.2.4\r\nGeneric Routing Encapsulation (GRE) is a tunneling protocol developed by Cisco that encapsulates multiprotocol traffic between remote Cisco routers. GRE does not encrypt data. OSPF is a open source routing protocol. IPsec is a suite of protocols that allow for the exchange of information that can be encrypted and verified. Internet Key Exchange (IKE) is a key management standard used with IPsec."
  },
  {
    "id": "Modules 6-8-52",
    "module": "Modules 6-8",
    "number": 52,
    "topic": "NAT",
    "question": "52. What is a disadvantage when both sides of a communication use PAT?",
    "choices": [
      "End-to-end IPv4 traceability is lost.",
      "The flexibility of connections to the Internet is reduced.",
      "The security of the communication is negatively impacted.",
      "Host IPv4 addressing is complicated."
    ],
    "answers": [
      "End-to-end IPv4 traceability is lost."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.3.2\r\nWith the use of NAT, especially PAT, end-to-end traceability is lost. This is because the host IP address in the packets during a communication is translated when it leaves and enters the network. With the use of NAT/PAT, both the flexibility of connections to the Internet and security are actually enhanced. Host IPv4 addressing is provided by DHCP and not related to NAT/PAT.",
    "gradable": true,
    "raw": "52. What is a disadvantage when both sides of a communication use PAT?\r\n\r\nEnd-to-end IPv4 traceability is lost.\r\nThe flexibility of connections to the Internet is reduced.\r\nThe security of the communication is negatively impacted.\r\nHost IPv4 addressing is complicated.\r\nExplanation: Topic 6.3.2\r\nWith the use of NAT, especially PAT, end-to-end traceability is lost. This is because the host IP address in the packets during a communication is translated when it leaves and enters the network. With the use of NAT/PAT, both the flexibility of connections to the Internet and security are actually enhanced. Host IPv4 addressing is provided by DHCP and not related to NAT/PAT."
  },
  {
    "id": "Modules 6-8-53",
    "module": "Modules 6-8",
    "number": 53,
    "topic": "NAT",
    "question": "53. What two addresses are specified in a static NAT configuration?",
    "choices": [
      "the outside global and the outside local",
      "the inside local and the outside global",
      "the inside global and the outside local",
      "the inside local and the inside global"
    ],
    "answers": [
      "the inside local and the inside global"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.2",
    "gradable": true,
    "raw": "53. What two addresses are specified in a static NAT configuration?\r\n\r\nthe outside global and the outside local\r\nthe inside local and the outside global\r\nthe inside global and the outside local\r\nthe inside local and the inside global\r\nExplanation: Topic 6.4.2"
  },
  {
    "id": "Modules 6-8-54",
    "module": "Modules 6-8",
    "number": 54,
    "topic": "WAN",
    "question": "54. A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)",
    "choices": [
      "municipal Wi-Fi",
      "digital subscriber line",
      "leased line",
      "Ethernet WAN",
      "cable"
    ],
    "answers": [
      "leased line",
      "Ethernet WAN"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 7.4.2\r\nAn organization can connect to a WAN through basic two options:\r\n\r\nPrivate WAN infrastructure - such as dedicated point-to-point leased lines, PSTN, ISDN, Ethernet WAN, ATM, or Frame Relay\r\nPublic WAN infrastructure - such as digital subscriber line (DSL), cable, satellite access, municipal Wi-Fi, WiMAX, or wireless cellular including 3G/4G",
    "gradable": true,
    "raw": "54. A company is considering updating the campus WAN connection. Which two WAN options are examples of the private WAN architecture? (Choose two.)\r\n\r\nmunicipal Wi-Fi\r\ndigital subscriber line\r\nleased line\r\nEthernet WAN\r\ncable\r\nExplanation: Topic 7.4.2\r\nAn organization can connect to a WAN through basic two options:\r\n\r\nPrivate WAN infrastructure - such as dedicated point-to-point leased lines, PSTN, ISDN, Ethernet WAN, ATM, or Frame Relay\r\nPublic WAN infrastructure - such as digital subscriber line (DSL), cable, satellite access, municipal Wi-Fi, WiMAX, or wireless cellular including 3G/4G"
  },
  {
    "id": "Modules 6-8-55",
    "module": "Modules 6-8",
    "number": 55,
    "topic": "NAT",
    "question": "55. What type of address is 128.107.240.239?",
    "choices": [
      "Public",
      "Private"
    ],
    "answers": [
      "Public"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "55. What type of address is 128.107.240.239?\r\n\r\nPublic\r\nPrivate\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-56",
    "module": "Modules 6-8",
    "number": 56,
    "topic": "VPN",
    "question": "56. Which type of VPN has both Layer 2 and Layer 3 implementations?",
    "choices": [
      "IPsec virtual tunnel interface",
      "dynamic multipoint VPN",
      "GRE over IPsec",
      "MPLS VPN"
    ],
    "answers": [
      "MPLS VPN"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.7",
    "gradable": true,
    "raw": "56. Which type of VPN has both Layer 2 and Layer 3 implementations?\r\n\r\nIPsec virtual tunnel interface\r\ndynamic multipoint VPN\r\nGRE over IPsec\r\nMPLS VPN\r\nExplanation: Topic 8.2.7"
  },
  {
    "id": "Modules 6-8-57",
    "module": "Modules 6-8",
    "number": 57,
    "topic": "NAT",
    "question": "57. Refer to the exhibit. A network administrator has configured R2 for PAT. Why is the configuration incorrect?\n\n\nfreestar",
    "choices": [
      "NAT-POOL2 is bound to the wrong ACL",
      "The ACL does not define the list of addresses to be translated.",
      "The overload keyword should not have been applied.",
      "The static NAT entry is missing"
    ],
    "answers": [
      "NAT-POOL2 is bound to the wrong ACL"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.5.2\r\nIn the exhibit, NAT-POOL 2 is bound to ACL 100, but it should be bound to the configured ACL 1. This will cause PAT to fail. 100, but it should be bound to the configured ACL 1. This will cause PAT to fail.",
    "gradable": true,
    "raw": "57. Refer to the exhibit. A network administrator has configured R2 for PAT. Why is the configuration incorrect?\r\n\r\n\r\nfreestar\r\n\r\n\r\nNAT-POOL2 is bound to the wrong ACL\r\nThe ACL does not define the list of addresses to be translated.\r\nThe overload keyword should not have been applied.\r\nThe static NAT entry is missing\r\nExplanation: Topic 6.5.2\r\nIn the exhibit, NAT-POOL 2 is bound to ACL 100, but it should be bound to the configured ACL 1. This will cause PAT to fail. 100, but it should be bound to the configured ACL 1. This will cause PAT to fail."
  },
  {
    "id": "Modules 6-8-58",
    "module": "Modules 6-8",
    "number": 58,
    "topic": "WAN",
    "question": "58. Match each component of a WAN connection to its description. (Not all options are used.)",
    "choices": [
      "58. Match each component of a WAN connection to its description. (Not all options are used.)"
    ],
    "answers": [],
    "matching": {
      "targets": [
        "devices that put data on the local loop",
        "customer devices that pass the data from a customer network or host computer for transmission over the WAN",
        "point that is established in a building or complex to separate customer equipment from service provider equipment",
        "devices and inside wiring located on the enterprise edge and which connect to a carrier link"
      ],
      "options": [
        "data terminal equipment",
        "demarcation point",
        "customer premises equipment",
        "data communications equipment"
      ],
      "answers": {
        "devices that put data on the local loop": "data communications equipment",
        "customer devices that pass the data from a customer network or host computer for transmission over the WAN": "data terminal equipment",
        "point that is established in a building or complex to separate customer equipment from service provider equipment": "demarcation point",
        "devices and inside wiring located on the enterprise edge and which connect to a carrier link": "customer premises equipment"
      }
    },
    "explanation": "Explanation: Topic 7.2.3",
    "gradable": true,
    "raw": "58. Match each component of a WAN connection to its description. (Not all options are used.)\r\n\r\n\r\n\r\nExplanation: Topic 7.2.3"
  },
  {
    "id": "Modules 6-8-59",
    "module": "Modules 6-8",
    "number": 59,
    "topic": "VPN",
    "question": "59. Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?",
    "choices": [
      "dynamic multipoint VPN",
      "SSL VPN",
      "IPsec virtual tunnel interface",
      "GRE over IPsec"
    ],
    "answers": [
      "GRE over IPsec"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.4\r\n\r\nGeneric Routing Encapsulation (GRE) is a tunneling protocol that supports both multicast and broadcast traffic, which is essential for the operation of routing protocols over a VPN. Because standard IPsec tunnels are limited to unicast traffic, GRE over IPsec is used to encapsulate these non-unicast frames into GRE packets, which are then securely encrypted by IPsec for transport across the public network.",
    "gradable": true,
    "raw": "59. Which type of VPN allows multicast and broadcast traffic over a secure site-to-site VPN?\r\n\r\n\r\nfreestar\r\ndynamic multipoint VPN\r\nSSL VPN\r\nIPsec virtual tunnel interface\r\nGRE over IPsec\r\nExplanation: Topic 8.2.4\r\n\r\nGeneric Routing Encapsulation (GRE) is a tunneling protocol that supports both multicast and broadcast traffic, which is essential for the operation of routing protocols over a VPN. Because standard IPsec tunnels are limited to unicast traffic, GRE over IPsec is used to encapsulate these non-unicast frames into GRE packets, which are then securely encrypted by IPsec for transport across the public network."
  },
  {
    "id": "Modules 6-8-60",
    "module": "Modules 6-8",
    "number": 60,
    "topic": "NAT",
    "question": "60. Match the steps with the actions that are involved when an internal host with IP address 192.168.10.10 attempts to send a packet to and external server at the IP address 209.165.200.254 across a router R1 that running dynamic NAT. (Not all options are used.)\n\nPlace the options in the following order:",
    "choices": [
      "step 5 => R1 replaces the address 192.168.10.10 with a translated inside global address.",
      "step 2 => R1 checks the NAT configuration to determine if this packet should be translated.",
      "step 4 => R1 selects an available global address from the dynamic address pool.",
      "step 1 => The host sends packets that request a connection to the server at the address 209.165.200.254",
      "step 3 => If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated"
    ],
    "answers": [],
    "matching": {
      "targets": [
        "step 1",
        "step 2",
        "step 3",
        "step 4",
        "step 5"
      ],
      "options": [
        "R1 replaces the address 192.168.10.10 with a translated inside global address.",
        "R1 checks the NAT configuration to determine if this packet should be translated.",
        "R1 selects an available global address from the dynamic address pool.",
        "The host sends packets that request a connection to the server at the address 209.165.200.254",
        "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated"
      ],
      "answers": {
        "step 1": "The host sends packets that request a connection to the server at the address 209.165.200.254",
        "step 2": "R1 checks the NAT configuration to determine if this packet should be translated.",
        "step 3": "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated",
        "step 4": "R1 selects an available global address from the dynamic address pool.",
        "step 5": "R1 replaces the address 192.168.10.10 with a translated inside global address."
      }
    },
    "explanation": "Explanation: Topic 6.5.3\r\nThe translation of the IP addresses from 209.65.200.254 to 192.168.10.10 will take place when the reply comes back from the server.",
    "gradable": true,
    "raw": "60. Match the steps with the actions that are involved when an internal host with IP address 192.168.10.10 attempts to send a packet to and external server at the IP address 209.165.200.254 across a router R1 that running dynamic NAT. (Not all options are used.)\r\n\r\nPlace the options in the following order:\r\n\r\nstep 5 => R1 replaces the address 192.168.10.10 with a translated inside global address.\r\nstep 2 => R1 checks the NAT configuration to determine if this packet should be translated.\r\nstep 4 => R1 selects an available global address from the dynamic address pool.\r\nstep 1 => The host sends packets that request a connection to the server at the address 209.165.200.254\r\nstep 3 => If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated\r\nExplanation: Topic 6.5.3\r\nThe translation of the IP addresses from 209.65.200.254 to 192.168.10.10 will take place when the reply comes back from the server."
  },
  {
    "id": "Modules 6-8-61",
    "module": "Modules 6-8",
    "number": 61,
    "topic": "VPN",
    "question": "61. Which type of VPN involves passenger, carrier, and transport protocols?",
    "choices": [
      "GRE over IPsec",
      "dynamic multipoint VPN",
      "MPLS VPN",
      "IPsec virtual tunnel interface"
    ],
    "answers": [
      "GRE over IPsec"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.4\r\nIn a GRE over IPsec tunnel, the term passenger protocol refers to the original packet that is to be encapsulated by GRE. The carrier protocol is the protocol that encapsulates the original passenger packet. The transport protocol is the protocol that will be used to forward the packet.",
    "gradable": true,
    "raw": "61. Which type of VPN involves passenger, carrier, and transport protocols?\r\n\r\nGRE over IPsec\r\ndynamic multipoint VPN\r\nMPLS VPN\r\nIPsec virtual tunnel interface\r\nExplanation: Topic 8.2.4\r\nIn a GRE over IPsec tunnel, the term passenger protocol refers to the original packet that is to be encapsulated by GRE. The carrier protocol is the protocol that encapsulates the original passenger packet. The transport protocol is the protocol that will be used to forward the packet."
  },
  {
    "id": "Modules 6-8-62",
    "module": "Modules 6-8",
    "number": 62,
    "topic": "NAT",
    "question": "62. Match the steps with the actions that are involved when an internal host with IP address 192.168.10.10 attempts to send a packet to an external server at the IP address 209.165.200.254 across a router R1 that is running dynamic NAT. (Not all options are used.)",
    "choices": [],
    "answers": [],
    "matching": {
      "targets": [
        "step 3",
        "step 2",
        "step 4",
        "step 1",
        "step 5"
      ],
      "options": [
        "R1 checks the NAT configuration to determine if this packet should be translated.",
        "R1 selects an available global address from the dynamic address pool.",
        "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.",
        "The host sends packets that request a connection to the server at the address 209.165.200.254.",
        "R1 replaces the address 192.168.10.10 with a translated inside global address."
      ],
      "answers": {
        "step 3": "If there is no translation entry for this IP address, R1 determines that the source address 192.168.10.10 must be translated.",
        "step 2": "R1 checks the NAT configuration to determine if this packet should be translated.",
        "step 4": "R1 selects an available global address from the dynamic address pool.",
        "step 1": "The host sends packets that request a connection to the server at the address 209.165.200.254.",
        "step 5": "R1 replaces the address 192.168.10.10 with a translated inside global address."
      }
    },
    "explanation": "Explanation: Topic 6.5.3\r\nThe translation of the IP addresses from 209.65.200.254 to 192.168.10.10 will take place when the reply comes back from the server.",
    "gradable": true,
    "raw": "62. Match the steps with the actions that are involved when an internal host with IP address 192.168.10.10 attempts to send a packet to an external server at the IP address 209.165.200.254 across a router R1 that is running dynamic NAT. (Not all options are used.)\r\n\r\n\r\n\r\n\r\nfreestar\r\nExplanation: Topic 6.5.3\r\nThe translation of the IP addresses from 209.65.200.254 to 192.168.10.10 will take place when the reply comes back from the server."
  },
  {
    "id": "Modules 6-8-63",
    "module": "Modules 6-8",
    "number": 63,
    "topic": "NAT",
    "question": "63. Refer to the exhibit. A network administrator is viewing the output from the command show ip nat translations . Which statement correctly describes the NAT translation that is occurring on router RT2?​",
    "choices": [
      "The traffic from a source IPv4 public address that originates traffic on the internet would be able to reach private internal IPv4 addresses​.",
      "The traffic from a source IPv4 address of 192.168.2.20 is being translated by router RT2 to reach a destination IPv4 address of 192.0.2.254.",
      "The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT.",
      "The traffic from a source IPv4 address of 192.0.2.88 is being translated by router RT2 to reach a destination IPv4 address of 192.168.254.253."
    ],
    "answers": [
      "The traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.4.4\r\nBecause no outside local or outside global address is referenced, the traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by using static NAT. In the output from the command show ip nat translations , the inside local IP address of 192.168.2.20 is being translated into an outside IP address of 192.0.2.254 so that the traffic can cross the public network. A public IPv4 device can connect to the private IPv4 device 192.168.254.253 by targeting the destination IPv4 address of 192.0.2.88.",
    "gradable": true,
    "raw": "63. Refer to the exhibit. A network administrator is viewing the output from the command show ip nat translations . Which statement correctly describes the NAT translation that is occurring on router RT2?​\r\n\r\n\r\n\r\nThe traffic from a source IPv4 public address that originates traffic on the internet would be able to reach private internal IPv4 addresses​.\r\nThe traffic from a source IPv4 address of 192.168.2.20 is being translated by router RT2 to reach a destination IPv4 address of 192.0.2.254.\r\nThe traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by means of static NAT.\r\nThe traffic from a source IPv4 address of 192.0.2.88 is being translated by router RT2 to reach a destination IPv4 address of 192.168.254.253.\r\nExplanation: Topic 6.4.4\r\nBecause no outside local or outside global address is referenced, the traffic from a source IPv4 address of 192.168.254.253 is being translated to 192.0.2.88 by using static NAT. In the output from the command show ip nat translations , the inside local IP address of 192.168.2.20 is being translated into an outside IP address of 192.0.2.254 so that the traffic can cross the public network. A public IPv4 device can connect to the private IPv4 device 192.168.254.253 by targeting the destination IPv4 address of 192.0.2.88."
  },
  {
    "id": "Modules 6-8-64",
    "module": "Modules 6-8",
    "number": 64,
    "topic": "NAT",
    "question": "64. What type of address is 10.131.48.7?",
    "choices": [
      "Private",
      "Public"
    ],
    "answers": [
      "Private"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "64. What type of address is 10.131.48.7?\r\n\r\n\r\nfreestar\r\nPrivate\r\nPublic\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-65",
    "module": "Modules 6-8",
    "number": 65,
    "topic": "VPN",
    "question": "65. Which type of VPN supports multiple sites by applying configurations to virtual interfaces instead of physical interfaces?",
    "choices": [
      "dynamic multipoint VPN",
      "IPsec virtual tunnel interface",
      "MPLS VPN",
      "GRE over IPsec"
    ],
    "answers": [
      "IPsec virtual tunnel interface"
    ],
    "matching": null,
    "explanation": "Explanation: 8.2.6\r\nAn IPsec VTI is a newer IPsec VPN technology that simplifies the configuration required to support multiple sites and remote access. IPsec VTI configurations use virtual interfaces to send and receive IP unicast and multicast encrypted traffic. Therefore, routing protocols are automatically supported without requiring configuration of GRE tunnels.",
    "gradable": true,
    "raw": "65. Which type of VPN supports multiple sites by applying configurations to virtual interfaces instead of physical interfaces?\r\n\r\ndynamic multipoint VPN\r\nIPsec virtual tunnel interface\r\nMPLS VPN\r\nGRE over IPsec\r\nExplanation: 8.2.6\r\nAn IPsec VTI is a newer IPsec VPN technology that simplifies the configuration required to support multiple sites and remote access. IPsec VTI configurations use virtual interfaces to send and receive IP unicast and multicast encrypted traffic. Therefore, routing protocols are automatically supported without requiring configuration of GRE tunnels."
  },
  {
    "id": "Modules 6-8-66",
    "module": "Modules 6-8",
    "number": 66,
    "topic": "VPN",
    "question": "66. Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?",
    "choices": [
      "dynamic multipoint VPN",
      "SSL VPN",
      "IPsec virtual tunnel interface",
      "GRE over IPsec"
    ],
    "answers": [
      "GRE over IPsec"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 8.2.4",
    "gradable": true,
    "raw": "66. Which type of VPN involves a nonsecure tunneling protocol being encapsulated by IPsec?\r\n\r\ndynamic multipoint VPN\r\nSSL VPN\r\nIPsec virtual tunnel interface\r\nGRE over IPsec\r\nExplanation: Topic 8.2.4"
  },
  {
    "id": "Modules 6-8-67",
    "module": "Modules 6-8",
    "number": 67,
    "topic": "NAT",
    "question": "67. What type of address is 10.19.6.7?",
    "choices": [
      "private",
      "public"
    ],
    "answers": [
      "private"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "67. What type of address is 10.19.6.7?\r\n\r\nprivate\r\npublic\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-68",
    "module": "Modules 6-8",
    "number": 68,
    "topic": "NAT",
    "question": "68. What type of address is 64.101.198.197?",
    "choices": [
      "public",
      "private"
    ],
    "answers": [
      "public"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "68. What type of address is 64.101.198.197?\r\n\r\n\r\nfreestar\r\npublic\r\nprivate\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-69",
    "module": "Modules 6-8",
    "number": 69,
    "topic": "NAT",
    "question": "69. What type of address is 64.101.198.107",
    "choices": [
      "public",
      "private"
    ],
    "answers": [
      "public"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "69. What type of address is 64.101.198.107\r\n\r\npublic\r\nprivate\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-70",
    "module": "Modules 6-8",
    "number": 70,
    "topic": "NAT",
    "question": "70. What type of address is 10.100.34.34?",
    "choices": [
      "private",
      "public"
    ],
    "answers": [
      "private"
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "70. What type of address is 10.100.34.34?\r\n\r\nprivate\r\npublic\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-71",
    "module": "Modules 6-8",
    "number": 71,
    "topic": "NAT",
    "question": "71. What type of address is 192.168.7.126?",
    "choices": [
      "Private.",
      "Public"
    ],
    "answers": [
      "Private."
    ],
    "matching": null,
    "explanation": "Explanation: Topic 6.1.1",
    "gradable": true,
    "raw": "71. What type of address is 192.168.7.126?\r\n\r\nPrivate.\r\nPublic\r\nExplanation: Topic 6.1.1"
  },
  {
    "id": "Modules 6-8-72",
    "module": "Modules 6-8",
    "number": 72,
    "topic": "NAT",
    "question": "72. What type of address is 198.133.219.148?",
    "choices": [
      "Private.",
      "Public"
    ],
    "answers": [
      "Public"
    ],
    "matching": null,
    "explanation": "",
    "gradable": true,
    "raw": "72. What type of address is 198.133.219.148?\r\n\r\nPrivate.\r\nPublic"
  }
];
