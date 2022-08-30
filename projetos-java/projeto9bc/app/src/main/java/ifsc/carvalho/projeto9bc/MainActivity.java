package ifsc.carvalho.projeto9bc;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;

public class MainActivity extends Activity {
    TextView hello;
    TextView clicks;
    int i = 0;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        hello = findViewById(R.id.helloTextView);
        clicks = findViewById(R.id.clicksTextView);

        hello.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onHelloClick(view);
            }
        });
    }

    public void onHelloClick (View v) {
        clicks.setText(Integer.toString(++i));
    }
}
