// 站点内容: 以后只需要改这个文件(中英文各一份), 页面会自动渲染。
// 标记: <b>J. Chen</b> 表示本人; † 共同一作; * 通讯作者。
window.SITE = {
  links: {
    email: "chenjp2020@mail.sustech.edu.cn",
    scholar: "https://scholar.google.com/citations?user=v9onQ3oAAAAJ",
    github: "https://github.com/Larkin-AP"
  },

  en: {
    name: "Junpeng Chen",
    nameAlt: "陈俊鹏",
    title: "PhD Candidate in Robotics",
    affiliation: "Southern University of Science and Technology (SUSTech) · Visiting PhD, EPFL",
    intro:
      "I am a PhD candidate (expected 2027) at SUSTech, working on motion planning and control of robots — " +
      "redundant manipulators, humanoid and legged robots, bimanual teleoperation, and reconfigurable mechanisms. " +
      "From Sep 2026 to Mar 2027 I am a visiting PhD student at the Reconfigurable Robotics Lab (RRL), EPFL, " +
      "hosted by Prof. Jamie Paik. I am looking for opportunities in robot motion control.",
    nav: { about: "About", research: "Research", projects: "Projects", publications: "Publications", patents: "Patents", honors: "Honors", education: "Education" },
    labels: { email: "Email", scholar: "Google Scholar", github: "GitHub", legend: "† equal contribution, * corresponding author" },

    education: [
      { school: "École Polytechnique Fédérale de Lausanne (EPFL)", detail: "Visiting PhD student · Reconfigurable Robotics Lab (RRL), host: Prof. Jamie Paik", period: "2026.09 – 2027.03" },
      { school: "Southern University of Science and Technology (SUSTech)", detail: "PhD (combined MS–PhD), Intelligent Manufacturing and Robotics · advisors: Prof. Jian S. Dai (Academician), Prof. Yang Pan", period: "2020.09 – 2027.06" },
      { school: "Hefei University of Technology (HFUT)", detail: "B.Eng., Mechanical Engineering · GPA 3.41/4.3, rank 22/191 · advisor: Prof. Zhe Wu", period: "2016.09 – 2020.06" }
    ],

    research: [
      {
        title: "Real-time control of a parallel wrist via arm-angle redundancy",
        text: "A semi-analytical solver for a 2SPS-RR parallel wrist (mean 1.8 μs per solve, 3.98× faster than the fastest tested external solver). " +
              "Wrist singularity margin and dexterity are expressed analytically as functions of the arm angle, so whole-arm redundancy can be used to improve wrist transmission — " +
              "21.6% lower wrist deficit in hardware trials with only 0.3% extra joint travel."
      },
      {
        title: "Complete analytical IK with a prescribed arm angle for wrist-offset manipulators",
        text: "For 7R manipulators with a wrist offset, where standard SRS solutions no longer apply, inverse kinematics with a prescribed arm angle reduces to a polynomial of degree at most four in the elbow position. " +
              "All solution branches are obtained in closed form, together with the feasible arm-angle range."
      },
      {
        title: "Force-aware bimanual teleoperation (ongoing)",
        text: "Impedance/admittance control corrects the target pose to make teleoperation safer and less demanding for the operator. " +
              "Human arm-angle data is used to learn a redundancy prior, so only the end-effector pose is required from the input device — no isomorphic mapping is needed."
      }
    ],

    projects: [
      {
        title: "Nanke Pangu humanoid robot",
        meta: "Project lead · 2024.03 – present",
        text: "The first fully self-developed humanoid robot of the SUSTech Robotics Institute. Led whole-robot development with an end–edge–cloud architecture " +
              "(Python decision-making, C++/EtherCAT real-time control, cloud VLA/VLM reasoning, connected via ROS/TCP-IP), " +
              "integrating a LiDAR + AMR base, a dexterous hand, and a 7-DoF hybrid redundant arm with a wrist 6-axis force sensor and depth cameras."
      },
      {
        title: "Bionic hexapod robot",
        meta: "Project lead · 2020.09 – 2023.06 · with Leju Robot",
        text: "Developed a coupled-parallelogram-leg hexapod (55 kg, 80 kg target payload): mechanical design, explicit forward/inverse kinematics, C++ motion planning, " +
              "an EtherCAT communication framework, and a web-based teleoperation interface. Proposed a trajectory-parameter design method based on a velocity index and wading height."
      },
      {
        title: "Multimodal metamorphic quadruped",
        meta: "Project lead · 2022.10 – 2024.10",
        text: "Mechanical and communication framework, adaptive climbing gait, and leg–arm coordination tests. ROBIO 2023 Best Paper Award in Robotics finalist."
      },
      {
        title: "Robotic force-controlled grinding · Reconfigurable flexible assembly line",
        meta: "Participant · 2021.12 –",
        text: "Force control, drag teaching, and peg-in-hole assembly on industrial arms; modular intelligent production line and digital twin."
      }
    ],

    publicationsNote: "Selected from my Google Scholar profile; status as of Oct 2026.",
    publications: [
      { status: "Under review", authors: "<b>J. Chen</b>, Z. Tang*, J. S. Dai*, et al.", title: "Singularity margin and dexterity modulation of a 2SPS-RR parallel wrist via arm-angle redundancy resolution in a hybrid humanoid manipulator", venue: "IEEE/ASME Transactions on Mechatronics", year: "under review" },
      { status: "In preparation", title: "Complete analytical inverse kinematics with a prescribed arm angle for a class of wrist-offset 7R manipulators", venue: "manuscript in preparation", year: "" },
      { authors: "Z. Zeng, J. Guo, <b>J. Chen</b>, Y. Li, S. Peng, Y. Pan", title: "Reliable 7-DOF manipulator execution via arm-angle selection and trajectory retiming", venue: "IEEE Robotics and Automation Letters", year: "2026" },
      { authors: "T. Lei, <b>J. Chen</b>, Q. Li, J. S. Dai, Y. Pan", title: "A convergent continuous contact solver with explicit separation time for high-stiffness contact", venue: "IEEE Robotics and Automation Letters", year: "2026" },
      { authors: "S. Peng, Z. Han, <b>J. Chen</b>, Z. Zeng, D. Li, Y. Pan", title: "Robotic threaded insert assembly with LSTM motion state recognition and stable insertion control", venue: "IEEE Robotics and Automation Letters", year: "2026" },
      { authors: "Y. Fu, J. Guo, D. Li, <b>J. Chen</b>, L. Han, Y. Qu, Y. Pan", title: "Adaptive curriculum reinforcement learning with sim-to-real strategy in balance control of underactuated triple pendulum robots", venue: "Robotica 44(2), 698–722", year: "2026" },
      { authors: "S. Wang, <b>J. Chen</b>, W. Zhang, Y. Chai, X. Feng, Z. Zeng, et al.", title: "Teleoperation of humanoid robots based on chiral mapping and vision-language model assistance", venue: "Scientia Sinica Technologica 56(9), 2186–2204", year: "2026" },
      { authors: "N. Mao, <b>J. Chen</b>*, G. Jia*, E. Spyrakos-Papastavridis, J. S. Dai", title: "Kinetostatics and particle-swarm optimization of vehicle-mounted underactuated metamorphic loading manipulators", venue: "Mechanism and Machine Theory 217, 106254", year: "2025" },
      { authors: "D. Li, J. Guo, Y. Fu, <b>J. Chen</b>, J. Han, Y. Pan", title: "Operational space balancing control based on integrated CoM dynamics for underactuated triple pendulum robot", venue: "IEEE Robotics and Automation Letters 9(11), 10551–10558", year: "2024" },
      { authors: "N. Mao, <b>J. Chen</b>, E. Spyrakos-Papastavridis, J. S. Dai", title: "Dynamic modeling of wheeled biped robot and controller design for reducing chassis tilt angle", venue: "Robotica 42(8), 2713–2741", year: "2024" },
      { authors: "Y. Zhou, Y. Pan, <b>J. Chen</b>, T. Lei", title: "Variable time-step physics engine with continuous compliance contact model for optimal robotic grinding trajectory planning", venue: "Sensors 24(5), 1415", year: "2024" },
      { authors: "<b>J. Chen</b>, Y. Pan, J. Yu, H. Feng, J. S. Dai", title: "Velocity index and wading height based design method of trajectory parameters for a coupled parallelogram legged walking robot", venue: "Mechanism and Machine Theory 191, 105464", year: "2024" },
      { authors: "J. Fu†, <b>J. Chen</b>†, Z. Tang, Z. Wei, J. S. Dai*", title: "Stability margin based gait design on slopes for a novel reconfigurable quadruped robot with a foldable trunk", venue: "IEEE ROBIO 2023 (Best Paper Award in Robotics finalist, 4/377)", year: "2023" },
      { authors: "Y. Zhou, Y. Pan, T. Lei, <b>J. Chen</b>", title: "Robotic simulator with high-precision perception of contact dynamics", venue: "IEEE ICDL 2023", year: "2023" },
      { authors: "M. Li, W. Shi, <b>J. Chen</b>, Z. Zhuang, J. S. Dai", title: "Design and analysis of 8R-folding metamorphic mechanism and metamorphic robot", venue: "IFToMM World Congress on Mechanism and Machine Science", year: "2023" },
      { authors: "<b>J. Chen</b>, Y. Pan, M. Li, R. Zhu, M. Gao, K. Wang, X. Xiao, L. Deng, J. S. Dai", title: "Analysis of the obstacle-crossing capability for a coupled parallelogram leg", venue: "IFToMM World Congress on Mechanism and Machine Science", year: "2023" },
      { authors: "M. Gao†, <b>J. Chen</b>†, M. Li, J. S. Dai", title: "Design and evaluation of a novel self-adaptive ankle rehabilitation exoskeleton with elastic modules", venue: "IEEE ICARM 2023", year: "2023" },
      { authors: "Z. Wu, Y. Zhu, <b>J. Chen</b>, et al.", title: "Experimental study on single-crystal sapphire machining with a pregelatinized-polysaccharide-bonded abrasive tool (in Chinese)", venue: "Modern Manufacturing Engineering, 2019(12), 9–15", year: "2019" }
      // TODO: 已接收但 Scholar 暂未收录的会议论文, 拿到题目和会议名后补在这里。
    ],

    patents: [
      { status: "Granted", text: "Method for locomotion control of legged robots and legged robot (CN, 2023/11)" },
      { status: "Granted", text: "Bionic hexapod robot (CN, 2025/09)" },
      { status: "Granted", text: "Binocular fisheye camera system with multiple bionic modalities and control method thereof (CN, 2025/12)" },
      { status: "Granted", text: "Semi-analytical kinematic modeling of a parallel mechanism mimicking the human wrist and end-effector (CN, 2025/12)" },
      { status: "Granted", text: "A linkage-type leg variable-cell structure and its robot (CN, 2026/04)" },
      { status: "Pending", text: "Robotic leg and robot (CN, filed 2021/06)" },
      { status: "Pending", text: "Bionic gait control method and walking robot for multimodal robots (CN, filed 2024/05)" },
      { status: "Pending", text: "27-DoF high-performance dexterous hand with topological homeomorphism to human hand motion anatomy (CN, filed 2025/12)" },
      { status: "Software", text: "Control system for trunk-folding metamorphic robot (Software copyright, 2024SR0741415)" }
    ],

    honors: [
      { year: "2025.11", text: "Outstanding Graduate Student, SUSTech" },
      { year: "2024.09", text: "Distinguished Scholarship (top 20%), SUSTech" },
      { year: "2023.12", text: "T. J. Tarn Best Paper Award in Robotics — finalist, IEEE ROBIO 2023 (4/377)" },
      { year: "2020.06", text: "Outstanding Graduate (top 10%), HFUT" }
    ]
  },

  zh: {
    name: "陈俊鹏",
    nameAlt: "Junpeng Chen",
    title: "机器人学博士研究生",
    affiliation: "南方科技大学 · 洛桑联邦理工学院（EPFL）访问博士生",
    intro:
      "南方科技大学机器人学博士生（2027 届），研究机器人运动规划与控制，方向包括冗余机械臂、人形/足式机器人、双臂遥操作与可重构机构。" +
      "2026.09–2027.03 在 EPFL 可重构机器人实验室（RRL）访问，合作导师 Jamie Paik 教授。求职意向：机器人运动控制。",
    nav: { about: "简介", research: "研究", projects: "项目", publications: "论文", patents: "专利", honors: "荣誉", education: "教育" },
    labels: { email: "邮箱", scholar: "Google Scholar", github: "GitHub", legend: "† 共同一作，* 通讯作者" },

    education: [
      { school: "洛桑联邦理工学院（EPFL）", detail: "访问博士生 · 可重构机器人实验室（RRL），合作导师：Jamie Paik 教授", period: "2026.09 – 2027.03" },
      { school: "南方科技大学", detail: "博士（硕博连读），智能制造与机器人 · 导师：戴建生院士、潘阳教授", period: "2020.09 – 2027.06" },
      { school: "合肥工业大学", detail: "学士，机械工程 · GPA 3.41/4.3，排名 22/191 · 导师：吴喆教授", period: "2016.09 – 2020.06" }
    ],

    research: [
      {
        title: "基于臂角冗余的并联腕实时控制与传动调控",
        text: "针对 2SPS-RR 并联腕提出半解析运动学求解，平均 1.8 μs（较最快对照求解器快 3.98 倍）；将腕部奇异裕度与灵巧度解析表达为臂角的函数，利用整臂冗余调控传动性能，实机腕部亏损降低 21.6%，关节运动仅增加 0.3%。"
      },
      {
        title: "腕部偏置冗余臂的指定臂角完全解析逆解",
        text: "针对腕部存在偏置、标准 SRS 解法失效的七自由度臂，将指定臂角下的逆解化为肘点位置的至多四次方程，解析获得全部解分支并辨识臂角可行范围。"
      },
      {
        title: "力控融合的双臂遥操作（在研）",
        text: "以阻抗/导纳控制修正目标位姿，提升遥操作安全性、降低操作负担；基于人类臂角数据学习冗余臂角先验，仅需目标位姿输入，无需同构映射。"
      }
    ],

    projects: [
      {
        title: "南科·盘古人形机器人",
        meta: "项目负责人 · 2024.03 – 至今",
        text: "南科大机器人研究院首台全自研人形机器人。主导整机研制，构建“端—边—云”协同架构（Python 调度决策、C++/EtherCAT 实时运控、云端 VLA/VLM 复杂推理，经 ROS/TCP-IP 通信），集成激光雷达与 AMR 底盘、灵巧手、七自由度混联冗余臂（末端六维力传感器、深度相机）。"
      },
      {
        title: "仿生六足机器人",
        meta: "项目负责人 · 2020.09 – 2023.06 · 乐聚机器人合作",
        text: "研制耦合平行四边形腿六足样机（55 kg，目标载重 80 kg），完成机械设计、显式正/逆运动学、C++ 运动规划、EtherCAT 通信框架与网页端遥操作；提出基于速度指标与涉水高度的轨迹参数设计方法。"
      },
      {
        title: "多模态变胞四足机器人",
        meta: "负责人 · 2022.10 – 2024.10",
        text: "完成机械与通信框架，开发自适应攀爬步态并开展腿臂协同测试；ROBIO 2023 最佳机器人论文奖入围。"
      },
      {
        title: "机器人力控打磨系统 · 可重构柔性装配线",
        meta: "参与者 · 2021.12 –",
        text: "工业机械臂力控操作、拖动示教、轴孔装配；模块化智能产线与数字孪生建设。"
      }
    ],

    publicationsNote: "选自 Google Scholar，状态截至 2026 年 10 月。",
    publications: null,   // null 表示沿用英文列表(论文题目保持英文)
    patents: null,
    honors: [
      { year: "2025.11", text: "南方科技大学优秀研究生" },
      { year: "2024.09", text: "南方科技大学优秀奖学金（前 20%）" },
      { year: "2023.12", text: "IEEE ROBIO 2023 谭铁牛最佳机器人论文奖入围（4/377）" },
      { year: "2020.06", text: "合肥工业大学优秀毕业生（前 10%）" }
    ]
  }
};
