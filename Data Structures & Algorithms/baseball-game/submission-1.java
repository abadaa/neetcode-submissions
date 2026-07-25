class Solution {
    public int calPoints(String[] operations) {
        List<Integer> stack = new ArrayList<>();
        int finalScore = 0;
        for(String op : operations) {
            switch(op) {
                case "C":
                    stack.remove(stack.size() - 1);
                    break;
                case "+":
                    int sum = stack.get(stack.size() - 1) + stack.get(stack.size() - 2);
                    stack.add(sum);
                    break;
                case "D":
                    int doublePrev = stack.get(stack.size() - 1) * 2;
                    stack.add(doublePrev);
                    break;
                default:
                    stack.add(Integer.parseInt(op));
                    break;
            }
        }

        for(int score : stack) {
            System.out.println("Score given: " + score);
            finalScore += score;
        }

        return finalScore;
    }
}