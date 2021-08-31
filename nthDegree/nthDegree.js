// def followers(self):
// return set(edge.to for edge in self.edges)

// def ack(self, msg):
// if not msg.is_broadcasted_by(self) and test(msg.p_rebroadcast):
// @@ -80,7 +83,25 @@ def broadcast(self, msg):

// def follow(self, node, strength):
// node.edges.add(Edge(to=self, strength=strength))
// node.followers.add(self)

// def connections(self, deg):
// assert deg >= 1
// followers = list(self.followers)
// traversed_nodes = set()
// result = [followers]
// deg_on = 1
// while deg_on < deg:
//     next_deg_followers = []
//     for follower in followers:
//         followers_to_add = [node for node in follower.followers
//                             if node not in traversed_nodes]
//         for node in followers_to_add:
//             traversed_nodes.add(node)
//         next_deg_followers += followers_to_add
//     result.append(next_deg_followers)
//     followers = next_deg_followers
//     deg_on += 1
// return tuple(result)