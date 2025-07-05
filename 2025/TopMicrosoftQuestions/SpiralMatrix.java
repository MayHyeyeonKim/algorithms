import java.util.*;

public class SpiralMatrix {

    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix == null || matrix.length == 0) return result;

        //here!

        return result
    }

    public static void main(String[] args) {
        SpiralMatrix s = new SpiralMatrix();

        int[][] matrix = {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };

        List<Integer> result = s.spiralOrder(matrix);
        System.out.println("Spiral Order: " + result);

    }
}
