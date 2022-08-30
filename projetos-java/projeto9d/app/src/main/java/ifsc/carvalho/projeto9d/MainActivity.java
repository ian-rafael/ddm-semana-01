package ifsc.carvalho.projeto9d;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    EditText min;
    EditText max;
    TextView res;
    Button but;
    Random gen = new Random();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        min = findViewById(R.id.editTextMin);
        max = findViewById(R.id.editTextMax);
        res = findViewById(R.id.textViewRes);
        but = findViewById(R.id.buttonSortear);

        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onSortearClick(view);
            }
        });
    }

    public void onSortearClick(View v) {
        String minText = min.getText().toString();
        String maxText = max.getText().toString();
        if (minText.equals("") || maxText.equals("")) {
            res.setText(R.string.preencher);
        } else {
            int minv = Integer.parseInt(minText);
            int maxv = Integer.parseInt(maxText);
            int minValue = Math.min(minv, maxv);
            int maxValue = Math.max(minv, maxv);
            double floor = Math.floor(gen.nextInt(maxValue - minValue + 1));
            int resValue = (int) (floor + minValue);
            res.setText(Integer.toString(resValue));
        }
    }
}